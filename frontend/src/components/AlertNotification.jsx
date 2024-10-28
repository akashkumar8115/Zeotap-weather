import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AlertNotification = () => {
    const [alerts, setAlerts] = useState([]);

    const fetchAlerts = async () => {
        const response = await axios.get('/api/weather/alerts');
        setAlerts(response.data);
    };

    useEffect(() => {
        fetchAlerts();
    }, []);

    return (
        <div>
            <h2>Weather Alerts</h2>
            <ul>
                {alerts.map((alert, index) => (
                    <li key={index}>
                        {alert.city}: {alert.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlertNotification;
