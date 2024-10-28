import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherSummary = () => {
    const [summary, setSummary] = useState([]);
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

    const fetchSummary = async () => {
        const response = await axios.get(`/api/weather/summary?date=${date}`);
        setSummary(response.data);
    };

    useEffect(() => {
        fetchSummary();
    }, [date]);

    return (
        <div>
            <h2>Daily Weather Summary</h2>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <table>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Average Temp</th>
                        <th>Max Temp</th>
                        <th>Min Temp</th>
                        <th>Dominant Condition</th>
                    </tr>
                </thead>
                <tbody>
                    {summary.map((city, index) => (
                        <tr key={index}>
                            <td>{city._id}</td>
                            <td>{city.average_temp.toFixed(2)}°C</td>
                            <td>{city.max_temp.toFixed(2)}°C</td>
                            <td>{city.min_temp.toFixed(2)}°C</td>
                            <td>{city.dominant_condition}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WeatherSummary;
