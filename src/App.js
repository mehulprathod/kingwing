import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Tab from "./components/Tab";
import About from "./pages/About/About";
import Contest from "./pages/Contest/Contest";
import Wallet from "./pages/Wallet/Wallet";
import Contact from "./pages/Contact/Contact";
import UserContestCard from "./pages/UserContest/UserContestCard";
import Home from "./pages/Home/Home";

import Register from "./pages/Authentication/Register/Register";
import Login from "./pages/Authentication/Login/Login";
import ForgotPassword from "./pages/Authentication/ForgotPassword/ForgotPassword";

import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import usersReducer from "./store/users/users.reducer";
import contestsReducer from "./store/contests/contests.reducer";

const rootReducer = combineReducers({
  usersReducer: usersReducer,
  contestsReducer: contestsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const App = () => {
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
          <Route path="/edit-profile" element={<Tab />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
