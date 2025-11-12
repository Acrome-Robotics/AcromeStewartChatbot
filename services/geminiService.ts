
import { GoogleGenAI } from "@google/genai";
import { KNOWLEDGE_BASE } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export async function getChatbotResponse(question: string): Promise<string> {
  const model = "gemini-2.5-flash";
  const prompt = `
    You are an expert technical support chatbot for the ACROME Stewart Pro Platform.
    Your knowledge is strictly limited to the provided context, which is a set of question-and-answer pairs from the official documentation.
    Answer the user's question concisely and accurately based *only* on the provided information.
    If the answer is not in the context, politely state that you don't have information on that topic.
    Format your answers clearly. If the answer involves code, commands, specific values, or file paths, use markdown backticks (\`) for emphasis.
    Do not invent information or answer questions outside of the Stewart Platform topic.

    KNOWLEDGE BASE:
    ${KNOWLEDGE_BASE}

    USER QUESTION:
    ${question}
  `;

  try {
    const response = await ai.models.generateContent({
        model: model,
        contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Sorry, I encountered an error while trying to get a response. Please check the console for details.";
  }
}
