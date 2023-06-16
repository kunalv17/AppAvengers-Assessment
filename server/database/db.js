import mongoose from "mongoose"; // Importing Mongoose for MongoDB connectivity
import dotenv from "dotenv"; // Importing dotenv for environment variable configuration

dotenv.config(); // Load environment variables from a .env file

// Function to establish a MongoDB connection
const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB using the provided URI and options
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true, // Enable unified topology (recommended)
      useNewUrlParser: true, // Enable new URL parser (recommended)
    });

    console.log(`MongoDB Connected`); // Log a success message if the connection is established
  } catch (error) {
    console.error(`Error: ${error.message}`); // Log an error message if the connection fails
    process.exit(1); // Exit the process with a non-zero code to indicate an error
  }
};

export default connectDB; // Export the connectDB function as the default export
