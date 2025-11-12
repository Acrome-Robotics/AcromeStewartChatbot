
import React from 'react';
import { Message } from '../types';
import { UserIcon, AcromeIcon } from './Icons';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';

  const formatText = (text: string) => {
    const parts = text.split(/(`[^`]+`)/g);
    return parts.map((part, index) => {
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code key={index} className="bg-gray-800 text-yellow-300 rounded-md px-2 py-1 font-mono text-sm">
            {part.slice(1, -1)}
          </code>
        );
      }
      return part;
    });
  };

  return (
    <div className={`flex items-start gap-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
          <AcromeIcon className="w-8 h-8 text-white" />
        </div>
      )}
      <div
        className={`max-w-xl p-4 rounded-2xl shadow-md ${
          isUser
            ? 'bg-blue-600 text-white rounded-br-none'
            : 'bg-gray-700 text-gray-200 rounded-bl-none'
        }`}
      >
        <p className="whitespace-pre-wrap">{formatText(message.text)}</p>
      </div>
      {isUser && (
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
          <UserIcon className="w-6 h-6 text-white" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
