import { Request, Response } from 'express';
import { stdModel } from '../../../server/Database/Model/stdModel'; // Replace with your actual model import

const GetStudentData = async (req: Request, res: Response) => {
  try {
    const {
      rollNum,
      name,
      email,
      phoneNumber,
      department,
      semester,
      section,
      cgpa,
      attendance
    } = req.query;

    // Build the filter object
    const filter: any = {};

    if (rollNum) filter.rollNum = rollNum;
    if (name) filter.name = name;
    if (email) filter.email = email;
    if (phoneNumber) filter.phoneNumber = phoneNumber;
    if (department) filter.department = department;
    if (semester) filter.semester = parseInt(semester as string); // Ensure it's a number
    if (section) filter.section = section;
    if (cgpa) filter.cgpa = parseFloat(cgpa as string); // Ensure it's a number
    if (attendance) filter.attendance = parseFloat(attendance as string); // Ensure it's a number

    // Query the database with the filter object
    const students = await stdModel.find(filter); // Adjust based on your database querying method

    res.json(students);
  } catch (error) {
    console.error("Error fetching student data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { GetStudentData };
