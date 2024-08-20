import { Request, Response, NextFunction } from "express";
import { stdModel } from "../../Database/Model/stdModel";
import { createScretToken } from "../../tokenGeneration/generateToken"; 

const createStdUser = async (req: Request, res: Response) => {
    console.log("Request received at /saveStdData");

  try {
    const {rollNum, name, email, phoneNumber, department, semester, section, cgpa, attendance
      } = req.body;

    if (!name || !phoneNumber || !email || !department || !rollNum || !semester || !cgpa || !section || !attendance) {
      return res.status(400).json({ message: "Please fill all given input fields " });
    }

    const oldUser = await stdModel.findOne({ rollNum });

    if (oldUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const newUser= new stdModel({
        rollNum,
        name,
        email,
        phoneNumber,
        department,
        semester,
        section,
        cgpa,
        attendance,
    });

    const savedUser = await newUser.save();
    const token = createScretToken(savedUser._id);

    res.cookie("token", token, {
      path: "/",
      expires: new Date(Date.now() + 86400000), 
      secure: true, 
      httpOnly: true, 
      sameSite: "none", 
    });

    console.log("Cookie set successfully");

    res.json({ user: savedUser, token });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { createStdUser };
