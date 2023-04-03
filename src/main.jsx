import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC9acrwF508IT4pzWEcjDXgeYZBpNAyins",
  authDomain: "perfumeria-6926c.firebaseapp.com",
  projectId: "perfumeria-6926c",
  storageBucket: "perfumeria-6926c.appspot.com",
  messagingSenderId: "454443300655",
  appId: "1:454443300655:web:35721e4868041f90ed93da",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
