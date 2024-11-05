import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


// app config
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json()); //-->This middleware parsed the incoming data from frontend to backend into json format
app.use(cors()); //-->Using this we can access backend from frontend

// DB Connection
connectDB();

// Api endpoint
app.use("/api/food", foodRouter);
// upload folder will be exposed on this endpoint
app.use("/images", express.static("uploads"));
// endpoint for login and register user
app.use("/api/user", userRouter);
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

//It is the get method http using that we request data from server
app.get("/", (req, res) => {
  res.send("API WORKING");
});



// It is used to run the express server.
app.listen(port, () => {
  console.log(`Server Started On http://localhost:${port}`);
});



export { app };
