import React from 'react';
import cl from './Coin.module.css'

const Coin = ({priceChangePercentage, name, usdPrice, coinId, image}) => {

    const definePriceChange = () => {
        if (priceChangePercentage >= 0)
            return true
        else return false
    }

    return (
        <div className={cl.coin}>
            <div className={cl.coin__main}>
                <img
                    src={image}
                    width="80px"
                />
                <div className={cl.coin__main__name}>

                    <h3> {coinId.toUpperCase()}  </h3>
                    <p> {name} </p>
                </div>
            </div>
                <div className={cl.coin__price}>
                    <h3> ${usdPrice}</h3>
                    <div className={cl.priceChange}>
                        <p> 24 hours: </p>
                        <p className={cl.priceChange__number} style={definePriceChange()? {"color" : "green"}: {"color": "red"}} >   {priceChangePercentage}% </p>
                    </div>
                </div>
        </div>
    );
};

export default Coin;