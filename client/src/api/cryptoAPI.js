import {API_KEY, BASE_DOMAIN} from "../consts/cryptoApiConsts";
import axios from "axios";


export const fetchCoins = async (count) => {
    try {
        const response = await axios.get(BASE_DOMAIN + "/coins/markets",
            { params: {
                per_page: 100,
                page: 1,
                order: "market_cap_desc",
                sparkline: false,
                vs_currency: "usd"}
            })
        return response.data;
    } catch(error) {
        console.log(error)
        return [];
    }


}