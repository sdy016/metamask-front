import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useWeb3ReactManager } from "@web3-react/core/dist/manager";
import { useWeb3React } from "@web3-react/core";
import { injected } from "./lib/connectors";
import { isNoEthereumObject } from "./lib/errors";

function App() {
  // const { chainId, account, active, activate, deactivate } = useWeb3React();

  // const handleConnect = () => {
  //   if (active) {
  //     deactivate();
  //     return;
  //   }
  //   activate(injected, (error) => {
  //     if (isNoEthereumObject(error))
  //       window.open("https://metamask.io/download.html");
  //   });
  // };

  // useEffect(() => {
  //   if (window.ethereum) {
  //     console.log("meta mask 있음!");
  //   } else {
  //     console.log("meta mask 없음!");
  //   }
  // });
  return (
    <div className="App">
      <h1>Hello CRA-TS!</h1>
      <div>
        <h3>Accounts Info</h3>
        <ul>
          <li>Account : kong</li>
          <li>Balance : 0 ETH</li>
        </ul>
      </div>
      <div>
        <h3>Transaction</h3>
        <form action="">
          <ul>
            <li>
              <input type="text" id="received" placeholder="받을 사람" />
            </li>
            <li>
              <input type="text" id="amount" placeholder="보낼 금액" />
            </li>
            <li>
              <button type="submit">전송!!</button>
            </li>
          </ul>
        </form>
      </div>
    </div>
    // <div>
    //   <div>
    //     <p>Account: {account}</p>
    //     <p>ChainId: {chainId}</p>
    //   </div>
    //   <div>
    //     <button type="button" onClick={handleConnect}>
    //       {active ? "disconnect" : "connect"}
    //     </button>
    //   </div>
    // </div>
  );
}

export default App;
