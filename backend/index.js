const express = require('express');
const mongoose = require('mongoose');
const weatherRoutes = require('./routes/weatherRoutes');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/weather', weatherRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/weather-monitoring', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.log('Error connecting to MongoDB:', err);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

