import userModel from "../models/userModel.js";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";


// Login user function
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // check user available with the id
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User does not exist" });
    }
    // Password not matching the existing user password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(Error);
    res.json({ success: false, message: "Error" });
  }
};
// creating Token and send it to the user

const createToken = (id) => {
  return jsonwebtoken.sign({ id }, process.env.JWT_SECRET);
};

//  Register user
const registerUser = async (req, res) => {
  // destructure the name email and pwd from the request body
  const { name, password, email } = req.body;
  try {
    // Check if the email id is already registered and existing
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "USER ALREADY EXISTS" });
    }
    //   validating email format and strong password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter valid email" });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }
    // encrypt the password using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //   creating new user
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { loginUser, registerUser };
