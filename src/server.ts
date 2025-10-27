//External libraries
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
//Internal files
import { authMiddleware, AuthenticatedRequest } from './middleware/authMiddleware.js';
import { authRouter } from './routes/authRoute.js';
import { filmRouter } from './routes/filmRouter.js';
//ENV variables
import './config/env.js';

// Configuration of the Express server
export const app = express();
app.use(helmet());
app.use(express.json());

// Connection to MongoDB
mongoose.connect(process.env.MONGO_URI!)
    .then(() => console.log('CONNECTED TO THE DATABASE'))
    .catch(err => console.error("CONNECTION TO DB FAILED: ", err))

// Protected route
app.get("/protected", authMiddleware, (req:AuthenticatedRequest, res: Response) => {
    res.json({ message: "Access granted!", user: req.user });
});
  
// Public routes
app.use("/auth", authRouter);
app.use("/films", filmRouter);

