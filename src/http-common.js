import axios from "axios";

export const HTTP = axios.create({
    baseURL: `${process.env.API_REST}`,
    //baseURL: "https://bluemed.mx/api/v1/",
});
