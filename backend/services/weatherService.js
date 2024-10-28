const axios = require('axios');

const API_KEY = 'your_openweather_api_key';

exports.fetchWeatherData = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    const response = await axios.get(url);
    const weatherData = response.data;

    // Convert Kelvin to Celsius
    const temp = weatherData.main.temp - 273.15;
    const feels_like = weatherData.main.feels_like - 273.15;

    return {
        city,
        date: new Date(),
        temp,
        feels_like,
        main: weatherData.weather[0].main,
        min_temp: weatherData.main.temp_min - 273.15,
        max_temp: weatherData.main.temp_max - 273.15
    };
};
