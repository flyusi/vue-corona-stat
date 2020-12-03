import { httpClient } from "./httpClient";
import { API_URLS } from "../constants";

export class ApiService {
    static getCountries() {
        return httpClient.get(API_URLS.countries);
    }

    static getStatByCountry(country) {
        const url = `${API_URLS.country}/${country}`;
        return httpClient.get(url);
    }
}