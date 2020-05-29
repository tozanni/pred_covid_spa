import axios from 'axios';


//TODO: this must handle the request of jwt if missing or expiring
export const HTTP = axios.create({
    baseURL: `${process.env.API_REST}`,
    headers: {
        Authorization: 'Bearer {token}'
    }
})

