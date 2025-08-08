import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        const conn = mongoose.connect(process.env.MONGOURL)
        console.log("MongoDB is sucessfull");
    } catch (error) {
        console.log(error);
        console.log("there is an error");
        process.exit();
        
    }
}