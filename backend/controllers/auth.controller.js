import User from "../models/user.model.js";

export const register = async (req,res) => {
    try {
        const {name,email,password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({success:false, message:"Please fill all the fields"});
        }
    
        res.status(200).json({success:true, message:"Register Page"});
    } catch (error) {
        console.log("Error : ",error);
        res.status(500).json({success:false, message:"Something went wrong"});
    }
}