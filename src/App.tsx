import { useEffect, useState } from "react";
import "./App.css";
import { useWeb3 } from "./hooks/useWeb3";
import { nftMock, nftModel } from "./model/nft.model";
import NftItem from "./components/nftItem";

function App() {
  const [account, web3] = useWeb3();
  const [isLogin, setIsLogin] = useState<Boolean>();
  const [balance, setBalance] = useState<number>();
  const [amount, setAmount] = useState<string>("");

  //회사 지갑 주소.
  const receiveWalletAddress: string =
    "0x36478b0d42F584727106526183934010053F412A";

  const changeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const fireTx = async (nftInfo: nftModel) => {
    const result = await web3?.eth.sendTransaction({
      from: account,
      to: receiveWalletAddress,
      value: web3.utils.toWei(nftInfo.price, "ether"),
    });
    alert("success");
  };

  useEffect(() => {
    (async function () {
      const balance = await web3?.eth.getBalance(account);
      if (balance !== undefined) {
        setBalance(Number(balance) / 10 ** 18);
      }
    })();

    if (account === "") {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [account]);

  return (
    <div className="App">
      <h1>Hello CRA-TS!</h1>
      {isLogin ? (
        <>
          <div>
            <h3>Accounts Info</h3>
            <ul>
              <li>Account : {account}</li>
              <li>Balance : {balance} ETH</li>
            </ul>
          </div>
          <h3>NFTS</h3>

          <div className="market_list_more">
            <ul className="market_list_wrp betaNFT">
              {nftMock.map((nft) => (
                <NftItem nft={nft} onSale={fireTx} key={nft.seq} />
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div>메타마스크 설치해주세여</div>
      )}
    </div>
  );
}

export default App;
