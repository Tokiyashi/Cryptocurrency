import React from 'react';
import CoinList from "../components/CoinList/CoinList";
import {useEffect, useState} from "react";
import {fetchCoins, makeQuery} from "../api/cryptoAPI";
import PageChanger from "../components/PageChanger/PageChanger";
import Loader from "../components/Loader/Loader";
import {useFetch} from "../hooks/useFetch";

const CoinPricesPage = () => {

    const [coins, setCoins] = useState([]);
    const [filter, setFilter] = useState({
        query: '',
        sort: '',
    })
    const [page, setPage] = useState(1)
    const [fetchCoinList, isCoinsLoading, coinsFetchError] = useFetch(async () => {
        const result = await fetchCoins(page)
        await setCoins(result)
    })



    useEffect(()=> {
        fetchCoinList();
    }, [page])



    return (
        <main>

            <div className="content">

                {
                    coinsFetchError &&
                    <h1>
                       Error: {coinsFetchError}
                    </h1>
                }
                {
                    isCoinsLoading
                        ? <Loader/>
                        : <CoinList coins={coins}></CoinList>
                }
                <PageChanger nextPage={() => setPage(page + 1)} page={page} previousPage={() => {
                    if (page > 1) setPage(page - 1)
                }} />
            </div>
        </main>
    );
};

export default CoinPricesPage;