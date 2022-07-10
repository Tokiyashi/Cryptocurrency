import React from 'react';
import Coin from "../Coin/Coin";
import cl from "./CoinList.module.css"

const CoinList = ({coins}) => {
    return (
        <div className={cl.coinList}>
            {
                coins.length > 0 &&
                coins.map((item)=>
                <Coin name={item.name} priceChangePercentage={item.price_change_percentage_24h} key={item.id} coinId={item.symbol} image={item.image} usdPrice={item.current_price}/>
                )
            }
        </div>
    );
};

export default CoinList;