import mongoose from "mongoose"; // Importing Mongoose for MongoDB connectivity

// Define the Content schema
const ContentSchema = new mongoose.Schema({
  content: String, // Field to store the content data as a string
});

// Create the Content model using the ContentSchema
export const Content = mongoose.model("Content", ContentSchema);
