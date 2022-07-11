import React from 'react';
import CoinList from "../components/CoinList/CoinList";
import {useEffect, useState} from "react";
import {fetchCoins} from "../api/cryptoAPI";
import PageChanger from "../components/PageChanger/PageChanger";

const CoinPricesPage = () => {

    const [coins, setCoins] = useState([]);
    const [filter, setFilter] = useState({
        query: '',
        sort: '',
    })
    const [page, setPage] = useState(1)

    const findCoins = async () => {
        const result = await fetchCoins(page)
        await setCoins(result)
        console.log(result)
    }

    useEffect(()=> {
        findCoins()
    }, [page])


    return (
        <main>
            <div className="content">
                <h2> Cryptocurrency App </h2>
                <div>
                    <input
                        value={filter.query}
                        onChange={e => setFilter({...filter, query: e.target.value})}
                        placeholder="find anything you want..."
                    />
                </div>

                <CoinList coins={coins}></CoinList>
                <PageChanger nextPage={() => setPage(page + 1)} page={page} previousPage={() => {
                    if (page > 1) setPage(page - 1)
                }} />
            </div>
        </main>
    );
};

export default CoinPricesPage;