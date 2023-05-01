import express from "express"
import dotenv from "dotenv"
import userRoute from "./routes/userRoute.js"
import memberRoute from "./routes/memberRoute.js"
import centerRoute from "./routes/centerRoute.js"
import connectdb from "./models/db.js"
const app = express()



// Dotenv
dotenv.config()

// Database Connection

connectdb()
// Middleware Body parser
app.use(express.json())


// Routes
app.use("/api/v1/auth", userRoute)
app.use("/api/v1/member", memberRoute)
app.use("/api/v1/center", centerRoute)


// listen
app.listen(process.env.PORT, ()=>(console.log(`Server is running on ${process.env.PORT}`)))