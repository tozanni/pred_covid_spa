import axios from 'axios';

export const HTTP = axios.create({
    //baseURL: `${process.env.API_REST}`,
    baseURL: "http://ec2-3-21-99-253.us-east-2.compute.amazonaws.com/api/v1/",
});