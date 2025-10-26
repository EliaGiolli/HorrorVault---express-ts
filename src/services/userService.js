import { User } from "../models/userModel";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function userExists(email) {

    const exists = await User.findOne({ email });

    return !!exists;
}

export async function findUserByEmail(email) {
    return await User.findOne({ email })
}

export async function validateCredentials(password, user) {
    const validPassword = await bcrypt.compare(password, user.hashedPassword);

    if(!validPassword) throw new Error('Unable to validate the password');

        const token = jwt.sign(
            { sub: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        return token;
}

export async function createNewUser(email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User(email, hashedPassword);

    newUser.save();

    return newUser;
}