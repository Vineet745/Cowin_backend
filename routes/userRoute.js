import express from "express"
import {Login, UserRegister, getall, getsingle}  from "../controller/userController.js"

const router = express.Router()

router.post("/register",UserRegister)
router.post("/login",Login)
router.get("/getall",getall)
router.get("/:id",getsingle)

export default router;