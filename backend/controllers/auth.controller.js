import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

// register new user
export const register = async (req,res) => {
    try {
        const {name,email,password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({success:false, message:"Please fill all the fields"});
        }

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({success:false, message:"User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const user = await User.create({name,email,password:hashedPassword});
        if(!user){
            return res.status(400).json({success:false, message:"User registration failed"});
        }
        return res.status(200).json({success:true, message:"User registered successfully"});
    } catch (error) {
        console.log("Error : ",error);
        res.status(500).json({success:false, message:"Something went wrong"});
    }
}

export const login = async (req,res) => {
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({success:false, message:"Please fill all the fields"});
        }
        const user = await User.findOne({email}).select("+password");
        if(!user){
            return res.status(400).json({success:false, message:"User does not exist"});
        }
        const isPasswordMatched = await bcrypt.compare(password,user.password);
        if(!isPasswordMatched){
            return res.status(400).json({success:false, message:"Invalid credentials"});
        }
        res.status(200).json({success:true, message:"User logged in successfully"});
        
    } catch (error) {
        console.log("Error : ",error);
        res.status(500).json({success:false, message:"Something went wrong"});
    }
}