import axios from "axios";

//TODO: this must handle the request of jwt if missing or expiring
const HTTP = axios.create({
  baseURL: `${process.env.API_REST}`,
});

export default HTTP;
