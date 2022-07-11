import React from 'react';
import cl from './Coin.module.css'
import {Link} from "react-router-dom";

const Coin = ({priceChangePercentage, name, usdPrice, symbol, id, image}) => {

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

                    <Link to={"/coin/" + id} > {symbol.toUpperCase()}  </Link>
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