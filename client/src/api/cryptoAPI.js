import {API_KEY, BASE_DOMAIN} from "../consts/cryptoApiConsts";
import axios from "axios";


export const fetchCoins = async (count) => {
    try {
        const response = await axios.get(BASE_DOMAIN + "v1/assets", {
            headers:{"X-CoinAPI-Key": API_KEY} });
        return response.data;
    } catch(error) {
        console.log(error)
        return [];
    }


}