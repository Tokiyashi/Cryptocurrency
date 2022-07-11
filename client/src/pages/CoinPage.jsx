import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {fetchOneCoin} from "../api/cryptoAPI";
import './CoinPage.css'
import Chart from "../components/Chart/Chart";
import {fetchMarketChart} from "../api/priceApi";

const CoinPage = () => {

    const coinParams = useParams()
    const [coin, setCoin] = useState();
    const [marketData, setMarketData] = useState();



    const getCoinData = async () => {
        const result = await fetchOneCoin(coinParams.id);
        await console.log(result)
        await setCoin(result)
        const marketData = await fetchMarketChart(coinParams.id)
        await console.log(marketData.prices)
        await convertData(marketData.prices)
    }

    const convertData = (marketData) => {
        setMarketData( [

        {
            name: "7 Days",
            value: marketData[6][1],
        },
        {
            name: "6 Days",
            value: marketData[5][1],

        },
        {
            name: "5 Days",
            value: marketData[4][1],
        },
        {
            name: "4 Days",
            value: marketData[3][1],
        },
        {
            name: "3 Days",
            value: marketData[2][1],
        },
        {
            name: "2 Days",
            value: marketData[1][1],
        },
        {
            name: "Day ago",
            value: marketData[0][1],
        }])
    }

    useEffect(()=>{
        getCoinData();
    }, [])

    return (
        <main>
            <div className="content">
                <div className="coin">
                {coin &&
                    <div>
                        <div className="navigationHistory">
                            <Link to="/home"> coins </Link> > <p> {coin.name} </p>
                        </div>
                        <div className="coin__important">
                            <div className="coin__important__leftBlock">
                                <img
                                    height="80px"
                                    width="80px"
                                    src={coin.image.large}
                                />
                                <div className="coin__important__names">
                                    <p>{coin.symbol.toUpperCase()} </p>
                                    <h2> {coin.name} </h2>
                                </div>
                            </div>
                            <h2 className="coin__important__price"> ${coin.market_data.current_price.usd}</h2>
                            <div className="coin__important__prices">
                                <p>
                                    24h price change:
                                </p>
                               <p className="coin__important__prices__change">
                                   {Math.round(coin.market_data.price_change_percentage_24h*100)/100}%
                               </p>
                                <div className="coin__important__rank">
                                    <p>Rank #{coin.market_data.market_cap_rank}</p>
                                </div>
                            </div>
                        </div>


                       {/* <div className="links">
                            {
                                coin.links.official_forum_url
                                ?
                                <div>
                                    Offical forum links:
                                    <br/>
                                        {
                                            coin.links.official_forum_url.map((item, index)=>{
                                                return(item !== "")? <a href={item} key={item}> {index+1}. {item} </a> : false
                                            })
                                        }
                                </div>
                                :
                                <div>
                                no official forum links
                                </div>
                            }

                            {
                                coin.links.homepage
                                    ?
                                    <div>
                                        Homepage links:
                                        <br/>
                                        {
                                            coin.links.homepage.map((item, index)=>{
                                                return(item !== "")? <a href={item} key={item}> {index+1}. {item} </a> : false
                                            })
                                        }
                                    </div>
                                    :
                                    <div>
                                        no official forum links
                                    </div>
                            }
                        </div>*/}
                        <div className="cards">
                            <div className="card">
                                <div className="card__header">
                                    Total volume:
                                </div>
                                <div className="card__content">
                                    ${coin.market_data.total_volume.usd}
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__header">
                                    Market cap:
                                </div>
                                <div className="card__content">
                                    ${coin.market_data.market_cap.usd}
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__header">
                                    Circulating supply:
                                </div>
                                <div className="card__content">
                                    {coin.market_data.circulating_supply}
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div className="priceChart">
                    <h4> Price change from last week: </h4>
                  {<Chart inputData={marketData} />}
                </div>
                </div>

            </div>
        </main>
    );
};

export default CoinPage;