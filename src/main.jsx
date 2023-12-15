import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVFBGPGJd9ThoUM1PTTtmMj63ymhyX6hc",
  authDomain: "proyecto-coder-rodri.firebaseapp.com",
  projectId: "proyecto-coder-rodri",
  storageBucket: "proyecto-coder-rodri.appspot.com",
  messagingSenderId: "576158473054",
  appId: "1:576158473054:web:5c235c68d73b8789be0dcf",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
