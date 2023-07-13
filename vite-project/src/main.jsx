import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Cadastro from "./Pages/Cadastro /Cadastro.jsx";
import GlobalStyle from "./Pages/Styles/GlobalStyles.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Cadastro />
    <GlobalStyle />
  </React.StrictMode>
);
