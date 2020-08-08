import axios from 'axios';

/**
 * ham xu ly viec gi day
 * Created by nvkhai 22.12.2020
 */
const api = axios.create({
    baseURL: "localhost:3000"
})

export { api }