import { signUpUser, logInUser } from "../controllers/authController";

import { Router } from "express";

export const authRouter = Router();

// POST - Sign-up
authRouter.post('/signup', signUpUser);

// POST - Log-in
authRouter.post('/login', logInUser);