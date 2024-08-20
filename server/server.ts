import app from "./src/app";
import mongoose from 'mongoose';

const port = 800;

// Connect to MongoDB with inline type assertion
mongoose.connect('mongodb://localhost:27017/School-Management-System', {
  serverSelectionTimeoutMS: 5000,
} as mongoose.ConnectOptions)
  .then(() => {
    console.log("MongoDB connected Successfully!");
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is Running on Port: http://localhost:${port}/`);
});
