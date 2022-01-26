import axios from 'axios'

export const Api = axios.create({
    baseURL: "https://ib.homologa.cashway.io/api/v3/"
});

