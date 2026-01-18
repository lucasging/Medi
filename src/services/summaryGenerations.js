import { GoogleGenerativeAI } from "@google/generative-ai";

export const generateAISummary = async (prompt) => {
  try {
    // Fixed: Use environment variable securely
    const apiKey = process.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('API key is not set in environment variables');
    }
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error generating summary:", error);
    throw error;
  }
};
