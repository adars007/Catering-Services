import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://greatstack:10312000@cluster0.qpwhg.mongodb.net/food-del')
    .then(() => console.log("DB CONNECTED"))
}
