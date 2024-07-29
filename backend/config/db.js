import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://arishsoomar1:FavoriteBlue@cluster0.bblvu3v.mongodb.net/mytasks').then(()=>console.log("DB Connected"))
}