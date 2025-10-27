import {
    userExists, 
    findUserByEmail, 
    validateCredentials, 
    createNewUser
} from '../services/userService';

// Sign-up
export const signUpUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user already exists
        const exists = await userExists(email);
        if (exists) return res.status(400).json({ error: "User already exists" });

        // Create new user
        await createNewUser(email, password);

        res.status(201).json({ message: "User created successfully" });
        
  } catch (err) {
    return res.status(400).json({ error: (err).message });
  }
}

// Log-in
export const logInUser = async (req, res) => {

    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await findUserByEmail(email);
        if (!user) return res.status(401).json({ error: "Invalid credentials" });

        // Validate credentials and get JWT token
        const token = await validateCredentials(password, user);

        res.json({ token });

  } catch (err) {
    return res.status(400).json({ error: (err).message });
  }
}

