import {useEffect, useState} from "react";
import {fetchCoins} from "./api/cryptoAPI";
import Coin from "./components/Coin/Coin";
import CoinList from "./components/CoinList/CoinList";
import CoinPricesPage from "./pages/CoinPricesPage";

function App() {


  return (
    <div className="App">
        <CoinPricesPage/>
    </div>
  );
}

export default App;
