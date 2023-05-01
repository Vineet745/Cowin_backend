import express from "express"
import { addcenter } from "../controller/CenterController.js";

const router = express.Router()


router.post ("/addcenter", addcenter)

export default router;