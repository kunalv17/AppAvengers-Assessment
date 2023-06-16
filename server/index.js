import express from "express"; // Importing Express to create the server
import cors from "cors"; // Importing CORS middleware for cross-origin requests

import connectDB from "./database/db.js"; // Importing the connectDB function to establish MongoDB connection
import { Content } from "./database/schema.js"; // Importing the Content model

const app = express(); // Creating an Express application

app.use(cors()); // Using the CORS middleware to allow cross-origin requests
app.use(express.json()); // Parsing JSON request bodies
app.use(express.urlencoded({ extended: false })); // Parsing URL-encoded request bodies

const PORT = 5000; // Port on which the server will listen

// Route to fetch content
app.get("/content", (req, res) => {
  Content.findOne() // Find a single document from the Content collection
    .then((contentData) => {
      res.send(contentData); // Send the fetched content as a response
    })
    .catch((error) => {
      console.error("Failed to fetch content", error); // Log an error message if fetching fails
      res.status(500).send("Internal Server Error"); // Send a 500 Internal Server Error response
    });
});

// Route to autosave content
app.post("/autosave", (req, res) => {
  const { content } = req.body; // Extract the content from the request body

  Content.findOne() // Find a single document from the Content collection
    .then((existingContent) => {
      if (existingContent) {
        // If content exists, update it with new content
        existingContent.content = content;
        return existingContent.save(); // Save the updated content document
      } else {
        // If content doesn't exist, create a new content document
        const newContent = new Content({ content });
        return newContent.save(); // Save the new content document
      }
    })
    .then(() => {
      res.send("ok"); // Send an "ok" response if autosave is successful
    })
    .catch((error) => {
      console.error("Failed to autosave content", error); // Log an error message if autosave fails
      res.status(500).send("Internal Server Error"); // Send a 500 Internal Server Error response
    });
});

app.listen(PORT, () => {
  connectDB(); // Establish the MongoDB connection
  console.log(`Server is running on port ${PORT}`); // Log a message indicating that the server is running
});
