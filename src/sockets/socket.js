import socketIO from "socket.io-client";

const SOCKET_URL = "http://localhost:8080/";

export const socket = socketIO(SOCKET_URL);

// Emit
export const socketEmit = (name, data = {}) => {
  const token = localStorage.getItem("AUTH_TOKEN");

  try {
    data.token = token;
    socket.emit(name, data);
  } catch (error) {
    console.log("error", error);
  }
};

// export the function to connect and use socket IO:
export const startSocketIO = (store) => {
  socket.connect();

  socket.on("connect", () => {
    console.log("Socket Connected");
    socketEmit("IAMAVAILABEL");
  });

  socket.on("disconnect", (e) => {
    console.log("connection to server lost.", e);
  });


  socket.on("contestProcess", (contentData) => {
    store.dispatch({type: 'SET_CONTEST_OVER_PROCESS', value: contentData});
  });

  socket.on("connect_error", (err) => {
    console.log(err);
  });

  
};
