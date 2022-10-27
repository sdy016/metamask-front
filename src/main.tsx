import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Web3ReactProvider } from "@web3-react/core";
import { ExternalProvider, Web3Provider } from "@ethersproject/providers";

function getLibrary(provider: ExternalProvider) {
  const library = new Web3Provider(provider, "any");
  return library;
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </React.StrictMode>
);
