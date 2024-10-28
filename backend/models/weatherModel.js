const mongoose = require('mongoose');

const WeatherSchema = new mongoose.Schema({
    city: String,
    date: Date,
    temp: Number, // Temperature in Celsius
    main: String, // Main weather condition (Clear, Rain, etc.)
    feels_like: Number, // Perceived temperature
    min_temp: Number,
    max_temp: Number,
    summary: {
        average_temp: Number,
        max_temp: Number,
        min_temp: Number,
        dominant_condition: String
    }
});

module.exports = mongoose.model('Weather', WeatherSchema);
