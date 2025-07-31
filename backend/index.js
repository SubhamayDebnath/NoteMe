import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from "cors";
dotenv.config();
import errorMiddleware from './middleware/error.middleware.js';
import DBConnection from "./config/DBConnection.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import mainRoutes from "./routes/main.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: '*',
    credentials: false,
  })
);

app.use(cookieParser());
app.use(morgan('dev'));

app.use("", mainRoutes);
app.use("/api/auth", authRoutes);
app.use("/user", userRoutes);

app.use(errorMiddleware);
app.listen(PORT, () => {
  DBConnection();
  console.log(`Server is running on port ${PORT}`);
});