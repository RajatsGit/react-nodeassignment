import { Router } from "express";
import getUser from "../controllers/getUsers/getUser.js";



const router = Router()

router.get('/users',getUser)

export default router