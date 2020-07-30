import axios from "axios";

export const HTTP = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ?
        "https://api.rcpcovid19.mx/api/v1/" : `${process.env.API_REST}`,
});