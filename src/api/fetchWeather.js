import axios from "axios";

const URL='https://api.openweathermap.org/data/2.5/weather';
const API_KEY='ab6a194b259af0efd19bab9c2273063e';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}