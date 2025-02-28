// index.js
import React from "react";
import ReactDOM from "react-dom/client"; // Import the 'react-dom/client' module for React 18+
import App from "./App"; // Import the App component
import "./index.css"; // Optional: for global styles
import { store } from "./Redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root using 'createRoot'
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
