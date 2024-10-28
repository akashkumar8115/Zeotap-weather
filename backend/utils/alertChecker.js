const Weather = require('../models/weatherModel');

exports.checkAlerts = async () => {
    const alertThresholds = { temp: 35 }; // Alert if temp exceeds 35°C
    const alerts = [];

    const weatherData = await Weather.find({});
    for (const data of weatherData) {
        if (data.temp > alertThresholds.temp) {
            alerts.push({
                city: data.city,
                message: `Temperature exceeded ${alertThresholds.temp}°C`
            });
        }
    }

    return alerts;
};
