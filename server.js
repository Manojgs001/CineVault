require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies
app.use(express.static(__dirname)); // Serve static files from current directory

// MongoDB Connection
// Only connect if URI is provided, otherwise fail gracefully so local testing can alert the user
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI, { family: 4 })
        .then(() => console.log('Connected to MongoDB'))
        .catch(err => console.error('MongoDB connection error:', err));
} else {
    console.warn('⚠️ MONGODB_URI is not set in .env file. Database operations will fail.');
}

// User Schema & Model
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    favorites: { type: Array, default: [] }
});

const User = mongoose.model('User', userSchema);

// --- Auth Endpoints ---

// Login Endpoint
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        
        if (user && await bcrypt.compare(password, user.password)) {
            res.json({ success: true, user: { name: user.name, email: user.email, favorites: user.favorites || [] } });
        } else {
            res.status(401).json({ success: false, message: 'Invalid email or password.' });
        }
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Register Endpoint
app.post('/api/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: 'Please provide all required fields.' });
        }
        
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ success: false, message: 'Email already exists.' });
        }
        
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Create new user
        const newUser = new User({ name, email, password: hashedPassword, favorites: [] });
        await newUser.save();
        
        res.status(201).json({ success: true, user: { name: newUser.name, email: newUser.email, favorites: [] } });
    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// --- Favorites Endpoints ---

// Get Favorites Endpoint
app.post('/api/favorites/get', async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        
        res.json({ success: true, favorites: user.favorites || [] });
    } catch (err) {
        console.error('Get favorites error:', err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Toggle Favorite Endpoint
app.post('/api/favorites/toggle', async (req, res) => {
    try {
        const { email, movie } = req.body;
        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        
        const movieIndex = user.favorites.findIndex(m => m.imdbID === movie.imdbID);
        let isFavorite = false;
        
        if (movieIndex === -1) {
            // Add to favorites
            user.favorites.push(movie);
            isFavorite = true;
        } else {
            // Remove from favorites
            user.favorites.splice(movieIndex, 1);
            isFavorite = false;
        }
        
        // Save updated user
        await user.save();
        
        res.json({ success: true, isFavorite, favorites: user.favorites });
    } catch (err) {
        console.error('Toggle favorite error:', err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// --- Movie API Proxy Endpoints ---

// Search Movies
app.get('/api/movies/search', async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) return res.status(400).json({ error: 'Query parameter is required' });

        const apiKey = process.env.OMDB_API_KEY;
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`);
        res.json(response.data);
    } catch (err) {
        console.error('OMDb Search Error:', err.message);
        res.status(500).json({ error: 'Failed to fetch movies from OMDb' });
    }
});

// Get Movie Details
app.get('/api/movies/details', async (req, res) => {
    try {
        const { id } = req.query;
        if (!id) return res.status(400).json({ error: 'Movie ID parameter is required' });

        const apiKey = process.env.OMDB_API_KEY;
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}&plot=full`);
        res.json(response.data);
    } catch (err) {
        console.error('OMDb Details Error:', err.message);
        res.status(500).json({ error: 'Failed to fetch movie details from OMDb' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
