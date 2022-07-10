import React from 'react';
import CoinList from "../components/CoinList/CoinList";
import {useEffect, useState} from "react";
import {fetchCoins} from "../api/cryptoAPI";

const CoinPricesPage = () => {

    const [coins, setCoins] = useState([]);

    const findCoins = async () => {
        const result = await fetchCoins()
        await setCoins(result)
        console.log(result)
    }

    useEffect(()=> {
        findCoins()
    }, [])


    return (
        <main>
            <div className="content">
                <h2> Cryptocurrency App </h2>
                <div>
                    
                </div>
                <CoinList coins={coins}></CoinList>
            </div>
        </main>
    );
};

export default CoinPricesPage;