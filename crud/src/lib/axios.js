import axios from "axios";

export const api = axios.create({
    baseUrl:"https://localhost:8000"
})