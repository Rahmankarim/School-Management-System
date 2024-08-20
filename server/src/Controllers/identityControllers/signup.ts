import { Request, Response, NextFunction } from "express";
import { userModel } from "../../../Database/Model/userModel";
import { createScretToken } from "../../../tokenGeneration/generateToken"; 
import bcrypt from "bcrypt";

const createUser = async (req: Request, res: Response) => {
  try {
    const { name,phoneNumber, email, password, role } = req.body;

    if (!name || !phoneNumber || !email || !password || !role) {
      return res.status(400).json({ message: "Please fill all given input fields " });
    }

    const oldUser = await userModel.findOne({ email });

    if (oldUser) {
      return res.status(409).json({ message: "User already exists. Please log in." });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new userModel({
      name,
      phoneNumber,
      email,
      password: hashedPassword,
      role,
    });

    const savedUser = await newUser.save();
    const token = createScretToken(savedUser._id);

    res.cookie("token", token, {
      path: "/",
      expires: new Date(Date.now() + 86400000), // 1 day
      secure: true, // HTTPS only
      httpOnly: true, // Client-side JS can't access
      sameSite: "none", // Cross-site requests
    });

    console.log("Cookie set successfully");

    res.json({ user: savedUser, token });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { createUser };
