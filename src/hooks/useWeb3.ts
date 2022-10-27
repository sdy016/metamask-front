import { useEffect, useState } from "react";

export const useWeb3 = () => {
  const [account, setAccount] = useState(false);

  useEffect(() => {
    if (window.ethereum) {
      console.log("meta mask 있음!");
    } else {
      console.log("meta mask 없음!");
    }
  });
};
