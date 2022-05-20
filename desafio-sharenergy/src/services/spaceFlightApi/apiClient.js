import axios from "axios"

const SPACEFLIGHT_API_URL = "https://api.spaceflightnewsapi.net/v3";

const api = axios.create({
  baseURL: SPACEFLIGHT_API_URL
});

export default api;