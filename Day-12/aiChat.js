require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY // ✅ FIXED
});

async function main(msg) {
  const response = await ai.models.generateContent({
    model: "gemini-1.5-flash", // use stable model
    contents: msg
  });
  return response.text;
}

module.exports = main;
