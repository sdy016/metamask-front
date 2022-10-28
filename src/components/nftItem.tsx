import React from "react";
import { nftModel } from "./../model/nft.model";

const NftItem: React.FC<{
  nft: nftModel;
  onSale: (nftInfo: nftModel) => void;
}> = ({ nft, onSale }) => {
  return (
    <li className="mint">
      <div className="nft_bx_sty">
        <div className="imb_bx">
          <img src={nft.imgUrl} className="img_conts" alt="" />
        </div>
        <div className="game_owner">
          <span>SALE NFT</span>
          <strong title="TEDDY">{nft.name}</strong>
          <div className="nft_state_view">SALE</div>
        </div>
        <div className="nft_price">
          <span>Price</span>
          <div className="coin_info_bx">
            <strong className="price_bx">
              {nft.price.toLocaleString(undefined, {
                maximumFractionDigits: 5,
              })}
              <span /> ETH
            </strong>
          </div>
        </div>
        <div className="nft_owner" />
      </div>
      <div className="btn_nft_state">
        <button onClick={() => onSale(nft)}>SALE</button>
      </div>
    </li>
  );
};

export default NftItem;
