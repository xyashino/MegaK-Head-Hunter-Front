import axios from "axios";

export const HttpRequest = axios.create({
    baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:3000",
    headers: {
        "Content-type": "application/json",
    },
    withCredentials: true,
});