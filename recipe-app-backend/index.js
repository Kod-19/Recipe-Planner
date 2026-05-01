const express = require('express');
const mongoose = require('moongoose');
const cors = require('cors'); // Import the routes
require('dotenv').config(); // Load environment variables from .env file

const app = express(); // creates your server
const PORT = process.env.PORT || 5000; // Use the PORT environment variable or default to 5000

//Middleware
app.use(cors()); // Allows React to call your API
app.use(express.json()); // Parses JSON request bodies
app.use(express.urlencoded({ extended: true})); // Parses form data

// CONNECT TO MONGODB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log('❌ MongoDB error:', err));

// ROUTES
app.use('/api/auth', require('./routes/auth'));
app.use('/api/recipes', require('./routes/recipes'));
app.use('/api/mealplan', require('./routes/mealplan'));

// START SERVER
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});