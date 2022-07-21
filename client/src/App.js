import CoinPricesPage from "./pages/CoinPricesPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CoinPage from "./pages/CoinPage";
import Header from "./components/Header/Header";



function App() {
  return (
      <BrowserRouter>
          <Header/>
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
