import React from "react";
import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ListGroup from "./components/ListGroup";
import About from "./pages/About/About";
import Contest from "./pages/Contest/ContestDetails";

import Contact from "./pages/Contact/Contact";

import Home from "./pages/Home/Home";

import Register from "./pages/Authentication/Register/Register";
import Login from "./pages/Authentication/Login/Login";
import ForgotPassword from "./pages/Authentication/ForgotPassword/ForgotPassword";
import Wallet from "./pages/Authentication/Wallet/Wallet";
import UserContestCard from "./pages/Authentication/UserContest/UserContestCard";

import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import usersReducer from "./store/users/users.reducer";
import contestsReducer from "./store/contests/contests.reducer";
import transactionsReducer from "./store/transactions/transactions.reducer";
import { startSocketIO } from "./sockets/socket";

const rootReducer = combineReducers({
  usersReducer: usersReducer,
  contestsReducer: contestsReducer,
  transactionsReducer: transactionsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const App = () => {
  useEffect(() => {
    startSocketIO(store);
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contest/:id" element={<Contest />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/my-contest" element={<UserContestCard />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/profile" element={<ListGroup />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
