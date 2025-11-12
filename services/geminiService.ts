
import { GoogleGenAI } from "@google/genai";
import { KNOWLEDGE_BASE } from '../constants';
import { Source } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export async function getChatbotResponse(question: string): Promise<{ text: string; sources: Source[] }> {
  const model = "gemini-2.5-flash";
  const prompt = `
    You are an expert technical support chatbot for the ACROME Stewart Pro Platform.
    Your knowledge is based on the provided KNOWLEDGE BASE and supplemented by Google Search results.

    1.  **First, try to answer based *only* on the KNOWLEDGE BASE.** This is your primary source of truth.
    2.  **If the KNOWLEDGE BASE doesn't contain the answer, use the provided Google Search results.** Synthesize the information to provide a helpful response.
    3.  **If you cannot find an answer in either source, politely state that you don't have information on that topic.**
    
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
        config: {
            tools: [{googleSearch: {}}],
        }
    });
    
    const text = response.text;
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks ?? [];
    
    const sources = groundingChunks
        .map(chunk => chunk.web)
        // Fix: Updated the type guard to make the `title` property optional. The previous type assumed `title` would always be a string, which can cause type inference issues if the API returns a source without a title.
        .filter((web): web is { uri: string, title?: string } => !!web?.uri)
        .map(web => ({ uri: web.uri, title: web.title || web.uri }));

    // Deduplicate sources by URI
    const uniqueSources = Array.from(new Map(sources.map(s => [s.uri, s])).values());

    return { text, sources: uniqueSources };
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return {
        text: "Sorry, I encountered an error while trying to get a response. Please check the console for details.",
        sources: []
    };
  }
}
