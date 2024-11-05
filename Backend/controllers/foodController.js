import foodModel from "../models/foodModel.js";
import fs from 'fs'

//add food items
const addFood = async (req, res) => {
    
    let image_filename = `${req.file.filename}`;
    
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image:image_filename
    })
    try {
        // using this method food data will be saved in database
        await food.save();
        res.json({success:true,message:"Food Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error!!"})
    }
}

// all food list
const listFood = async (req, res) => {
    try {
        // In this variable we will get the data of all the food items.
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error})
    }
}

// remove food item
const removeFood = async (req, res) => {
    try {
        // find the food item we want to delete
        const food = await foodModel.findById(req.body.id);
        // delete the images from the upload folder
        fs.unlink(`uploads/${food.image}`, () => { })
        // using the id delete the data from mongodb database
        await foodModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Food removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

export {addFood,listFood,removeFood}