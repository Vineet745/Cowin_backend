import express from "express"
import { registermember } from "../controller/memberController.js";

const router = express.Router()

router.post("/registermember", registermember )

export default router; 