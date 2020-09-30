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

const HTTP = axios.create(api_rest);

HTTP.defaults.withCredentials = true;

HTTP.interceptors.response.use(undefined, (err) => {
  return new Promise(() => {
    if (err.response.status === 401) {
      this.$router.push({path: "/login"})
    }
    throw err;
  });
});

HTTP.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem('authtoken');

    if (token) {
      config.headers['Authorization'] = `Bearer ${ token }`;
    }

    return config;
  }, 

  (error) => {
    return Promise.reject(error);
  }
);

export default HTTP;
