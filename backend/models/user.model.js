import { model, Schema } from "mongoose";

const userSchema = new Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        minLength: [3, "Name must be greater than 3 character long"],
        maxLength: [26, "Name must be less than 26 character long"],
        lowercase: true,
        trim: true,
    },
    email:{
        type: String,
        required: [true, "Email is required"],
        lowercase: true,
        trim: true,
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please fill valid email address",
        ],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [6, "Password must be greater than 6 character long"],
        select: false,
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
},{
    timestamps: true,
});

const User = model("User", userSchema);
export default User