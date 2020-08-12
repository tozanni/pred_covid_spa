import axios from "axios";

let api_rest = {};
switch (process.env.NODE_ENV) {
    case 'production':
        api_rest.baseURL = "https://api.rcpcovid19.mx/api/v1/";
        break;
    case 'dev':
        api_rest.baseURL = "https://api-dev.rcpcovid19.mx/api/v1/";
        break;
    default:
        api_rest.baseURL = `${process.env.API_REST}`;
}

export const HTTP = axios.create(api_rest);