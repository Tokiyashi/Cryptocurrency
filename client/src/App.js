import {useEffect, useState} from "react";
import {fetchCoins} from "./api/cryptoAPI";
import Coin from "./components/Coin/Coin";
import CoinList from "./components/CoinList/CoinList";
import CoinPricesPage from "./pages/CoinPricesPage";
import {BrowserRouter, Route, Routes, Switch} from "react-router-dom";
import CoinPage from "./pages/CoinPage";



function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/coin">
                <Route path=":id" element={<CoinPage/>} />
              </Route>
              <Route path="*" element={<CoinPricesPage/>}/>

          </Routes>
      </BrowserRouter>
  );
}

export default App;
