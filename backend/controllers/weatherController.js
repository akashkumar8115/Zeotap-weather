const Weather = require('../models/weatherModel');
const { fetchWeatherData } = require('../services/weatherService');
const { checkAlerts } = require('../utils/alertChecker');

// Fetch and store weather data
exports.storeWeatherData = async (req, res) => {
    try {
        const cities = ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad'];
        const weatherData = await Promise.all(cities.map(fetchWeatherData));

        for (const data of weatherData) {
            const newWeather = new Weather(data);
            await newWeather.save();
        }

        res.status(201).json({ message: 'Weather data stored successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error storing weather data' });
    }
};

// Get daily summary
exports.getDailySummary = async (req, res) => {
    try {
        const date = new Date(req.query.date);
        const weatherSummary = await Weather.aggregate([
            { $match: { date: { $eq: date } } },
            {
                $group: {
                    _id: '$city',
                    average_temp: { $avg: '$temp' },
                    max_temp: { $max: '$max_temp' },
                    min_temp: { $min: '$min_temp' },
                    dominant_condition: { $first: '$main' } // Simplified
                }
            }
        ]);
        res.status(200).json(weatherSummary);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving weather summary' });
    }
};

// Check weather alert thresholds
exports.checkWeatherAlerts = async (req, res) => {
    try {
        const alerts = await checkAlerts();
        res.status(200).json(alerts);
    } catch (error) {
        res.status(500).json({ message: 'Error checking weather alerts' });
    }
};
