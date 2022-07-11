import React from 'react';
import Coin from "../Coin/Coin";
import cl from "./CoinList.module.css"

const CoinList = ({coins}) => {
    return (
        <div className={cl.coinList}>
            {
                coins.length > 0 &&
                coins.map((item)=>
                <Coin name={item.name} priceChangePercentage={item.price_change_percentage_24h} key={item.id} symbol={item.symbol} image={item.image} id={item.id} usdPrice={item.current_price}/>
                )
            }
        </div>
    );
};

export default CoinList;