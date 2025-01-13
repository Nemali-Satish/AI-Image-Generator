import userModel from "../models/user.model.js";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //Initial Checks 
    if (!name || !email || !password) {
      return res.status(401).json({
        message: "Missing Details",
        success: false,
      });
    }

    //Hashing Plan Password
    const hashedPassword = await bcrypt.hash(password, 10);

    //Adding User 
    const userData = { name, email, password: hashedPassword };

    const newUser = new userModel(userData);
    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRETE);
    res.json({
      success: true,
      message: "",
      token,
      user: { name: user.name },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email });

    if (!user) {
      return res.status(401).json({
        message: "User Not Found",
        success: false,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Credientials",
        success: false,
      });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRETE);
    res.json({
      success: true,
      message: "",
      token,
      user: { name: user.name },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const userCredits = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await userModel.findById(userId);
    res.json({
      success: true,
      credits: user.creditBalance,
      user: { name: user.name },
    });
  } catch (error) {
    console.log(`Credit Controller error : ${error}`);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
