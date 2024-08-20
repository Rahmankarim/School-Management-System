import express from 'express';
import { login } from '../Controllers/identityControllers/logIn';
import { createUser } from '../Controllers/identityControllers/signup';
import { createStdUser } from '../Controllers/userStdData';
import { GetStudentData } from '../Controllers/GetStudentData';

const router = express.Router();

router.post("/signup", createUser);
router.post("/login", login);
router.post("/saveStdData", createStdUser);
router.get("/students/filter", GetStudentData); // Remove the queryParams from the route
router.post('/logout', (req, res) => {
  console.log('Logout request received'); // Confirm receipt
  res.clearCookie('token'); // Ensure 'token' matches the cookie name
  res.status(200).json({ message: 'Logged out' });
});




export { router };
