import { User, IUser } from "../models/userModel";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import '../config/env';

export class UserService {
    
    constructor() {}

    async userExists(email:string): Promise<boolean> {
        
        const exists = await User.findOne({ email });
        
        return !!exists;
    }
    
    async findUserByEmail(email:string): Promise<IUser | null> {
        return await User.findOne({ email })
    }
    
    async validateCredentials(password: string, user: IUser): Promise<string> {
        const validPassword = await bcrypt.compare(password, user.hashedPassword);
        
        if(!validPassword) throw new Error('Unable to validate the password');
        
        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET is not defined in environment variables');
        }
        
        const token = jwt.sign(
            { sub: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        return token;
    }
    
    async createNewUser(email: string, password:string): Promise<IUser> {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User(email, hashedPassword);
        
        newUser.save();
        
        return newUser;
    }
}