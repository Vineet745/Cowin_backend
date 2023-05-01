import mongoose from "mongoose";
const connectdb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Database connected ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error in Mongodb ${error}`)
    }
}

export default connectdb;