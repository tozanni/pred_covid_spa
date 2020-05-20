import axios from 'axios';

export const HTTP = axios.create({
    //TODO: @egarcia Meter este url en una variable de entorno
    baseURL: `http://ec2-3-21-99-253.us-east-2.compute.amazonaws.com/api/v1/`,
    headers: {
        Authorization: 'Bearer {token}'
    }
})