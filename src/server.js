import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet';

import authMiddleware from './middleware/authMiddleware.js'

dotenv.config();

// Configuration of the Express server
export const app = express();
app.use(helmet());
app.use(express.json());

// Connection to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('CONNECTED TO THE DATABASE'))
    .catch(err => console.error("CONNECTION TO DB FAILED: ", err))

// Protected route
app.get("/protected", authMiddleware, (req, res) => {
    res.json({ message: "Access granted!", user: req.user });
});
  
// Other routes


