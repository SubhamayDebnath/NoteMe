import {Router} from "express";
import { getUserHomePage } from "../controllers/user.controller.js";

const router = Router();

router.get("/",getUserHomePage)

export default router;