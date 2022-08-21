import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Layout from "app/components/Layout";
import { Web3ReactProvider, createWeb3ReactRoot } from "@web3-react/core";
import { getLibrary } from "./config/web3";

const Web3ReactProviderPolygon = createWeb3ReactRoot("polygon")

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
          <Web3ReactProvider getLibrary={getLibrary}>
              <App />
          </Web3ReactProvider>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
