import CoinPricesPage from "./pages/CoinPricesPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
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
