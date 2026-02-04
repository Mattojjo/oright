import { useState } from 'react';
import './ChatBubble.css';

export const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button 
        className="chat-bubble" 
        onClick={toggleChat}
        aria-label="Open chat support"
        aria-expanded={isOpen}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="chat-popover" role="dialog" aria-label="Chat support">
          <div className="chat-header">
            <h3>Chat with us</h3>
            <button 
              className="close-btn" 
              onClick={toggleChat}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>
          <div className="chat-body">
            <div className="chat-message bot-message">
              <p>Hi! How can we help you today?</p>
            </div>
            <div className="chat-message user-message">
              <p>This is a sample user message</p>
            </div>
          </div>
          <div className="chat-input">
            <input 
              type="text" 
              placeholder="Type your message..." 
              disabled 
              aria-label="Message input (currently disabled)"
            />
            <button disabled aria-label="Send message (currently disabled)">Send</button>
          </div>
        </div>
      )}
    </>
  );
};
