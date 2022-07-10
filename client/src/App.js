import {useEffect} from "react";
import {fetchCoins} from "./api/cryptoAPI";
import Coin from "./components/Coin/Coin";

function App() {

    const tesfunc = async () => {
        const coins =  await fetchCoins()
        console.log(coins)
    }

    useEffect(()=> {
            tesfunc()
    }, [])

  return (
    <div className="App">
        <main>
            <h2> Cryptocurrency App </h2>

            <div>
                <Coin name="usd" usdPrice="122" />
            </div>
        </main>
    </div>
  );
}

export default App;
