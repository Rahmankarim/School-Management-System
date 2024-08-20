import { Request, Response, NextFunction } from "express";
import { createScretToken } from "../../../tokenGeneration/generateToken";
import { userServicesInstance } from "../../../Services/userServices";
const bcrypt = require("bcrypt");
const env = require("dotenv");



env.config();

const login = async (req: Request, res: Response) => {

  if(req.body.role === "Admin" ||req.body.role === "Teacher" )
  {
    const { email, password, role } = req.body;
  
    if (!(email && password && role)) {
        console.log ("email and password and role is not given ");
      return res.status(400).json({ message: "Please fill the input fields below" });
    }
  
    const user = await userServicesInstance.getUserByEmail(email);
  
    if (!(user && (await bcrypt.compare(password, user.password)) && role == user.role)) {
      return res.status(404).json({ message: "Invalid credentials" });
    }
  
    const token = createScretToken(user._id);
    res.cookie("token", token, {
      domain: process.env.frontend_url, // Set your domain here
      path: "/", // Cookie is accessible from all paths
      expires: new Date(Date.now() + 86400000), // Cookie expires in 1 day
      secure: true, // Cookie will only be sent over HTTPS
      httpOnly: true, // Cookie cannot be accessed via client-side scripts
      sameSite: "none",
    });
  
    res.status(200).json({token});
  }
  else
  {
    const { rollNo , password, role } = req.body;
  
    if (!(rollNo && password && role)) {
        console.log ("rollNo and password and role is not given ");
      return res.status(400).json({ message: "Please fill the input fields below" });
    }
  
    const user = await userServicesInstance.getUserByRollNo(rollNo);
  
    if (!(user && (await bcrypt.compare(password, user.password)) && role == user.role)) {
      return res.status(404).json({ message: "Invalid credentials" });
    }
  
    const token = createScretToken(user._id);
    res.cookie("token", token, {
      domain: process.env.frontend_url, // Set your domain here
      path: "/", // Cookie is accessible from all paths
      expires: new Date(Date.now() + 86400000), // Cookie expires in 1 day
      secure: true, // Cookie will only be sent over HTTPS
      httpOnly: true, // Cookie cannot be accessed via client-side scripts
      sameSite: "none",
    });
  
    res.status(200).json({token});

  }
  

  }

export {login};