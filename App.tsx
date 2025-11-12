import React, { useState, useRef, useEffect } from 'react';
import { Message } from './types';
import { getChatbotResponse } from './services/geminiService.ts';
import ChatMessage from './components/ChatMessage';
import { SendIcon, AcromeIcon, LoadingSpinner, MicrophoneIcon } from './components/Icons';

// Define the SpeechRecognition interface for TypeScript
interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  onresult: (event: any) => void;
  onstart: () => void;
  onend: () => void;
  onerror: (event: any) => void;
}

// Add SpeechRecognition to the global window object
// FIX: Changed from `typeof SpeechRecognition` to the constructor type `new () => SpeechRecognition`.
// `SpeechRecognition` is an interface (a type), not a value, so `typeof` cannot be used on it.
// This change correctly types the browser's Speech Recognition API constructor.
declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognition;
    webkitSpeechRecognition: new () => SpeechRecognition;
  }
}

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'initial',
      text: "Hello! I am the ACROME Stewart Pro Platform assistant. How can I help you today?",
      sender: 'ai',
    },
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Setup Speech Recognition API
  useEffect(() => {
    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognitionAPI) {
      const recognition = new SpeechRecognitionAPI();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onstart = () => setIsRecording(true);
      recognition.onend = () => setIsRecording(false);
      
      recognition.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        if (event.error === 'not-allowed') {
            setError("Microphone access was denied. Please allow it in your browser settings to use this feature.");
        } else {
            setError(`An error occurred during speech recognition: ${event.error}`);
        }
        setIsRecording(false);
      };

      recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join('');
        setUserInput(transcript);
      };
      
      recognitionRef.current = recognition;
    } else {
      console.warn('Speech Recognition is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    if (isRecording) {
      recognitionRef.current?.stop();
    }

    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: userInput,
      sender: 'user',
    };

    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setUserInput('');
    setIsLoading(true);
    setError(null);

    try {
      const { text: aiResponseText, sources } = await getChatbotResponse(userInput);
      const newAiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponseText,
        sender: 'ai',
        sources: sources,
      };
      setMessages((prevMessages) => [...prevMessages, newAiMessage]);
    } catch (err) {
      const errorMessage = 'Failed to get response from AI. Please try again.';
      setError(errorMessage);
      const errorAiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: errorMessage,
        sender: 'ai',
      };
      setMessages((prevMessages) => [...prevMessages, errorAiMessage]);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleRecording = () => {
    if (!recognitionRef.current) return;
    
    if (isRecording) {
      recognitionRef.current.stop();
    } else {
      // Clear previous input when starting a new recording
      setUserInput('');
      recognitionRef.current.start();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white font-sans">
      <header className="bg-gray-800 shadow-md p-4 flex items-center gap-4 border-b border-gray-700">
        <AcromeIcon className="w-10 h-10"/>
        <div>
            <h1 className="text-xl font-bold text-gray-100">Stewart Pro AI Assistant</h1>
            <p className="text-sm text-gray-400">Your guide to the Stewart Platform</p>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
          {isLoading && (
            <div className="flex items-start gap-4 justify-start">
               <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                  <AcromeIcon className="w-8 h-8 text-white" />
                </div>
              <div className="max-w-xl p-4 rounded-2xl bg-gray-700 text-gray-200 rounded-bl-none flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-75"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></div>
              </div>
            </div>
          )}
          {error && !isLoading && (
             <div className="text-red-400 text-center p-2 bg-red-900/20 rounded-lg">{error}</div>
          )}
          <div ref={chatEndRef} />
        </div>
      </main>

      <footer className="bg-gray-800/80 backdrop-blur-sm p-4 sticky bottom-0 border-t border-gray-700">
        <form onSubmit={handleSendMessage} className="max-w-4xl mx-auto flex items-center gap-3">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder={isRecording ? "Listening..." : "Ask a question about the Stewart Platform..."}
            className="flex-1 w-full p-3 bg-gray-700 rounded-xl border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400 text-gray-100"
            disabled={isLoading}
          />
          {recognitionRef.current && (
            <button
                type="button"
                onClick={handleToggleRecording}
                disabled={isLoading}
                className={`p-3 rounded-xl transition-colors focus:ring-2 focus:ring-blue-500 focus:outline-none flex items-center justify-center w-12 h-12 ${
                    isRecording ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={isRecording ? 'Stop recording' : 'Start voice input'}
            >
                <MicrophoneIcon className="w-6 h-6" />
            </button>
          )}
          <button
            type="submit"
            disabled={isLoading || !userInput.trim()}
            className="p-3 bg-blue-600 rounded-xl hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors focus:ring-2 focus:ring-blue-500 focus:outline-none flex items-center justify-center w-12 h-12"
            aria-label="Send message"
          >
            {isLoading ? <LoadingSpinner className="w-6 h-6"/> : <SendIcon className="w-6 h-6" />}
          </button>
        </form>
      </footer>
    </div>
  );
}

export default App;
