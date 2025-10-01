import { GoogleGenAI } from "@google/genai";

// Hardcoded key you pasted earlier
const ai = new GoogleGenAI({
  apiKey: "AIzaSyBb5kCp6sZieOoIfhCg_Hvs6IQ88M_6Omc", 
});

const getOpenAIAPIResponse = async (message) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
      config: {
        thinkingConfig: {
          thinkingBudget: 0,
        },
      },
    });

    return response.text; // works as per your snippet
  } catch (err) {
    console.error("Gemini API error:", err);
    return "Sorry, I couldn’t process that.";
  }
};

export default getOpenAIAPIResponse;
