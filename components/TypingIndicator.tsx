import React from 'react';
import { AcromeIcon } from './Icons';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-start gap-4 justify-start" aria-live="polite" aria-busy="true">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
        <AcromeIcon className="w-8 h-8 text-white" />
      </div>
      <div className="max-w-xl p-4 rounded-2xl bg-gray-700 text-gray-200 rounded-bl-none flex items-center space-x-2">
        {/* A custom SVG animation of three dots that shrink and grow, creating a wave-like effect. */}
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current text-gray-400">
          <circle cx="4" cy="12" r="3">
            <animate id="typing-dot-1" begin="0;typing-dot-3.end-0.25s" attributeName="r" dur="0.75s" values="3;0;3" fill="freeze" />
          </circle>
          <circle cx="12" cy="12" r="3">
            <animate begin="typing-dot-1.begin+0.15s" attributeName="r" dur="0.75s" values="3;0;3" fill="freeze" />
          </circle>
          <circle cx="20" cy="12" r="3">
            <animate id="typing-dot-3" begin="typing-dot-1.begin+0.3s" attributeName="r" dur="0.75s" values="3;0;3" fill="freeze" />
          </circle>
        </svg>
        <span className="sr-only">AI is typing...</span>
      </div>
    </div>
  );
};

export default TypingIndicator;
