import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

// Register User API
const registerUser = async (req, res) => {
  try {
    const { name, adhar, phone, pmKisanCode, gmail, password } = req.body;
    console.log({ name, adhar, phone, pmKisanCode, gmail, password });

    // Check if all required fields are present
    if (!name || !adhar || !phone || !pmKisanCode || !gmail || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Missing Details" });
    }

    // Validate email format
    if (!validator.isEmail(gmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid Email",
      });
    }

    // Validate password strength
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }

    // Validate phone number length and digits
    if (!validator.isMobilePhone(phone, "en-IN")) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid 10-digit phone number",
      });
    }

    // Check if email or phone already exists
    const existingUser = await userModel.findOne({
      $or: [{ gmail }, { phone }],
    });
    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, message: "Email or Phone already registered" });
    }

    // Hash user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user object
    const userData = {
      name,
      adhar,
      phone,
      pmKisanCode,
      gmail,
      password: hashedPassword,
    };

    // Save user to the database
    const newUser = new userModel(userData);
    const user = await newUser.save();

    // Generate JWT token with expiration
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(201).json({ success: true, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Login User API
const loginUser = async (req, res) => {
  try {
    const { gmail, password } = req.body;

    // Find user by email
    const user = await userModel.findOne({ gmail });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User does not exist" });
    }

    // Compare password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Credentials" });
    }

    // Generate JWT token with expiration
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({ success: true, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export { registerUser, loginUser };
