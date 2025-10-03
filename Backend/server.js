const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// const todoRoutes = require('./routes/todoRoutes');

const app = express();
// Middleware
app.use(cors());
app.use(express.json());

// Global error handling 
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: err.message || 'Server error' });
});

//connect to DB
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Mongodb Connected');
    app.listen(PORT,() => console.log(`Server is running on port ${PORT}`));
})
.catch(err => console.log(err));

// Routes
// app.use('/api/todos',todoRoutes);
