import axios from "axios";

const getContent = async () => {
  try {
    const response = await axios.get("http://localhost:5000/content");
    return response.data.content;
  } catch (error) {
    console.error(error.message);
  }
};

const autoSave = async (content) => {
  try {
    await axios.post("http://localhost:5000/autosave", { content });
  } catch (error) {
    console.error(error.message);
  }
};

export { getContent, autoSave };
