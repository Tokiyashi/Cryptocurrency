import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {fetchOneCoin} from "../api/cryptoAPI";

const CoinPage = () => {

    const coinParams = useParams()
    const [coin, setCoin] = useState();

    const getCoinData = async () => {
        const result = await fetchOneCoin(coinParams.id);
        await console.log(result)
        setCoin(result)
    }

    useEffect(()=>{
        getCoinData();
    }, [])

    return (
        <main>
            <div>
                {coin && coin.description.en}
            </div>
        </main>
    );
};

export default CoinPage;