const express = require('express');
const { storeWeatherData, getDailySummary, checkWeatherAlerts } = require('../controllers/weatherController');
const router = express.Router();

router.post('/store', storeWeatherData); // Stores weather data periodically
router.get('/summary', getDailySummary); // Gets the daily weather summary
router.get('/alerts', checkWeatherAlerts); // Check if weather alerts should be triggered

module.exports = router;
