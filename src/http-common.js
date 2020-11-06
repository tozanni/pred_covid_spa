import axios from "axios";
import router from "./router";

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

const HTTP = axios.create(api_rest);

HTTP.interceptors.response.use(undefined, (err) => {
  return new Promise(() => {
    if (err.response.status === 401) {
      localStorage.clear();
      router.push({name: "home"})
    }
    throw err;
  });
});

export default HTTP;
