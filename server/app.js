const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoute');
const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1/user', userRoutes);



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
