import express from 'express'
import { addFood,listFood,removeFood } from '../controllers/foodController.js'
import multer from "multer"

// Using this router we can create the get ,post , push, delete method
const foodRouter = express.Router();

// image storage engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req,file,cb) => {
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

// This middleware uploads the data on local server uploads
const upload = multer({ storage: storage })

// Post method use to send data on server
foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)






export default foodRouter;