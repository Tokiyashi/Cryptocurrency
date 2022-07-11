import axios from "axios";
import {BASE_DOMAIN} from "../consts/cryptoApiConsts";

export const fetchMarketChart = async (id) => {
    try {
        const response = await axios.get(BASE_DOMAIN + `/coins/${id}/market_chart`,
            { params: {
                    vs_currency: "usd",
                    interval: "daily",
                    days: 7
            }})
        return response.data;
    } catch(error) {
        console.log(error)
        return [];
    }
}
