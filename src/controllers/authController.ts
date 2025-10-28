import { UserService } from '../services/userService';
import { signupSchema, loginSchema } from '../schemas/authSchema';
//Types
import { Request, Response } from 'express';
//Nodemailer
import { sendMail } from '../services/mailService';

const authService = new UserService();

// Sign-up
export const signUpUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = signupSchema.parse(req.body);

        // Check if user already exists
        const exists = await authService.userExists(email);
        if (exists) return res.status(400).json({ error: "User already exists" });

        // Create new user
        await authService.createNewUser(email, password);

        //Nodemailer
        await sendMail({
          to: email,
          subject: "Welcome to HorrorVault!",
          html: `
            <h2>Welcome to HorrorVault!</h2>
            <p>Your account is successfully created.</p>
            <p>Now you can login and enjoy our movies and our newslwtter.</p>
          `,
        });

        res.status(201).json({ message: "User created successfully" });
        
  } catch (err) {
    return res.status(400).json({ error: (err as Error).message });
  }
}

// Log-in
export const logInUser = async (req: Request, res: Response) => {

    try {
        const { email, password } = loginSchema.parse(req.body);

        // Find user by email
        const user = await authService.findUserByEmail(email);
        if (!user) return res.status(401).json({ error: "Invalid credentials" });

        // Validate credentials and get JWT token
        const token = await authService.validateCredentials(password, user);

      //Cookie HTTPOnly
        res.cookie("jwt", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 60 * 60 * 1000,
        });
        res.json({ token });

  } catch (err) {
    return res.status(400).json({ error: (err as Error).message });
  }
}

