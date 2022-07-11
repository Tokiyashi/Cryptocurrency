import {API_KEY, BASE_DOMAIN} from "../consts/cryptoApiConsts";
import axios from "axios";


export const fetchCoins = async (selectedPage) => {
    try {
        const response = await axios.get(BASE_DOMAIN + "/coins/markets",
            { params: {
                per_page: 20,
                page: selectedPage,
                order: "market_cap_desc",
                sparkline: false,
                vs_currency: "usd"}
            })
        console.log(response)
        return response.data;
    } catch(error) {
        console.log(error)
        return [];
    }
}

export const makeQuery = async (input) => {
    try {
        const response = await axios.get(BASE_DOMAIN + "/search",
            { params: {
                    query: input}
            })
        return response.data;
    } catch(error) {
        console.log(error)
        return [];
    }
}

export const fetchOneCoin = async (id) => {
    try {
        const response = await axios.get(BASE_DOMAIN + "/coins/" + id,
            { params: {
                    query: id}
            })
        return response.data;
    } catch(error) {
        console.log(error)
        return [];
    }
}

