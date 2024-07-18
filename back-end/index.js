const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const  cookieParser =require('cookie-parser')
const apiRoutes = require('./routes/router');

const PORT = process.env.PORT || 4000;
const app = express();

// Middleware
app.use(cors({ 
  origin: 'https://forget-password-fe-five.vercel.app',
  credentials: true 
}));
app.use(cookieParser())
app.use(bodyParser.json());

// Routes
app.use('/auth', apiRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.log("Error connecting to MongoDB", error);
  });