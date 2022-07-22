import React from 'react';
import CoinList from "../components/CoinList/CoinList";
import {useEffect, useState} from "react";
import {fetchCoins, makeQuery} from "../api/cryptoAPI";
import PageChanger from "../components/PageChanger/PageChanger";
import Loader from "../components/Loader/Loader";
import {useFetch} from "../hooks/useFetch";

const CoinPricesPage = () => {

    const [coins, setCoins] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState({currency: "usd", order:"market_cap_desc", perPage: 10});
    const [page, setPage] = useState(1);
    const [fetchCoinList, isCoinsLoading, coinsFetchError] = useFetch(async () => {
        const result = await fetchCoins(page, selectedOptions.currency, selectedOptions.order, selectedOptions.perPage)
        await setCoins(result)
    });

    useEffect(()=> {
        fetchCoinList();
    }, [page, selectedOptions])

    return (
        <main>
            <div className="content">
                <div style={{width: "100%"}}>
                <div>
                    <select
                        onChange={(e) => {setSelectedOptions({...selectedOptions, currency: e.target.value})}}>
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
                    <select
                        onChange={(e) => {setSelectedOptions({...selectedOptions, perPage: e.target.value})}}>
                        <option value={10}> 10 </option>
                        <option value={20}> 20 </option>
                        <option value={50}> 50 </option>
                    </select>
                </div>
                {
                    coinsFetchError &&
                    <h1>
                        Error: {coinsFetchError}
                    </h1>
                }
                {
                    isCoinsLoading
                    ? <Loader/>
                    : <CoinList coins={coins} currency={selectedOptions.currency}></CoinList>
                }
                <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
                    <PageChanger firstPage={() => {
                        setPage(1);
                        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                    }} nextPage={() => {
                        setPage(page + 1);
                        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                    }} page={page}
                                 previousPage={() => {
                                     if (page > 1) setPage(page - 1);
                                     window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                                 }}/>
                </div>

                </div>
            </div>
        </main>
    );
};

export default CoinPricesPage;