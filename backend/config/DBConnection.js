import mongoose from "mongoose";

// DB Connection
const DBConnection = async () => {
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${connection.connection.host}`);
    }catch(error){
        console.log(error);
        process.exit(1)
    }
}

export default DBConnection;