import axios from "axios";

const BASE_URL = "https://youtube-v311.p.rapidapi.com";

const options = {
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
    "x-rapidapi-host": "youtube-v311.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error("API Error:", error.response?.status);
    return null;
  }
};