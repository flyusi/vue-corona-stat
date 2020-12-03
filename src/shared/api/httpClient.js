import axios from "axios";
import { API_URLS } from "../constants";

export const httpClient = axios.create({
    baseURL: API_URLS.baseUrl
})