import axios from 'axios';
import React from 'react';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'b4fb6febd90daefee8266e7e8614ac5c';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY
        }
    });

    return data;
}