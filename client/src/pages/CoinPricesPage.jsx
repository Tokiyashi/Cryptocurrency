import React from 'react';
import CoinList from "../components/CoinList/CoinList";
import {useEffect, useState} from "react";
import {fetchCoins, makeQuery} from "../api/cryptoAPI";
import PageChanger from "../components/PageChanger/PageChanger";
import Loader from "../components/Loader/Loader";
import {useFetch} from "../hooks/useFetch";

const CoinPricesPage = () => {

    const [coins, setCoins] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState({currency: "usd", order:"market_cap_desc"});
    const [page, setPage] = useState(1);
    const [fetchCoinList, isCoinsLoading, coinsFetchError] = useFetch(async () => {
        const result = await fetchCoins(page, selectedOptions.currency, selectedOptions.order)
        await setCoins(result)
    });



    useEffect(()=> {
        fetchCoinList();
    }, [page, selectedOptions])



    return (
        <main>
            <div className="content">
                {
                    isCoinsLoading
                        ? <Loader/>
                        : <div style={{width: "100%"}}>
                            <select
                                onChange={(e) => setSelectedOptions({...selectedOptions, currency: e.target.value})}>
                                <option value={"usd"}> USD</option>
                                <option value={"btc"}> BTC</option>
                                <option value={"eth"}> ETH</option>
                                <option value={"bnb"}> BNB</option>
                            </select>
                            <select onChange={(e) => setSelectedOptions({...selectedOptions, order: e.target.value})}>
                                <option value={"market_cap_desc"}> Market Cap</option>
                                <option value={"volume_desc"}> Volume</option>
                                <option value={"id_asc"}> ID</option>
                                <option value={"gecko_desc"}> Gecko</option>
                            </select>
                            {
                                coinsFetchError &&
                                <h1>
                                    Error: {coinsFetchError}
                                </h1>
                            }
                            <CoinList coins={coins} currency={selectedOptions.currency}></CoinList>
                        </div>
                }
                    <PageChanger firstPage={() => setPage(1)} nextPage={() => setPage(page + 1)} page={page}
                                 previousPage={() => {
                                     if (page > 1) setPage(page - 1)
                                 }}/>
            </div>
        </main>
    );
};

export default CoinPricesPage;