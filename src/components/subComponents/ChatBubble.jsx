import { useState } from 'react';

export const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button 
        className="fixed bottom-8 right-8 w-[60px] h-[60px] rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] border-none text-white cursor-pointer flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)] z-[1000]" 
        onClick={toggleChat}
        aria-label="Open chat support"
        aria-expanded={isOpen}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="28" 
          height="28" 
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
        <div className="fixed bottom-[100px] right-8 w-[350px] h-[500px] bg-white rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.15)] flex flex-col z-[999] animate-[slideUp_0.3s_ease]" role="dialog" aria-label="Chat support">
          <style>{`
            @keyframes slideUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
          <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white px-5 py-5 rounded-t-2xl flex justify-between items-center">
            <h3 className="m-0 text-xl font-bold">Chat with us</h3>
            <button 
              className="bg-none border-none text-white text-[2rem] cursor-pointer leading-none p-0 w-[30px] h-[30px] flex items-center justify-center transition-opacity duration-200 hover:opacity-70" 
              onClick={toggleChat}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>
          <div className="flex-1 px-6 py-6 overflow-y-auto bg-[#f9f9f9]">
            <div className="mb-4 px-4 py-3 rounded-xl max-w-[80%] bg-[#e9ecef] self-start">
              <p className="m-0 text-[0.95rem]">Hi! How can we help you today?</p>
            </div>
            <div className="mb-4 px-4 py-3 rounded-xl max-w-[80%] bg-[#667eea] text-white self-end ml-auto">
              <p className="m-0 text-[0.95rem]">This is a sample user message</p>
            </div>
          </div>
          <div className="px-4 py-4 border-t border-[#e0e0e0] flex gap-2 bg-white rounded-b-2xl">
            <input 
              type="text" 
              className="flex-1 px-3 py-3 border border-[#ddd] rounded-lg font-[inherit] text-[0.95rem] disabled:bg-[#f5f5f5] disabled:cursor-not-allowed"
              placeholder="Type your message..." 
              disabled 
              aria-label="Message input (currently disabled)"
            />
            <button className="px-6 py-3 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white border-none rounded-lg cursor-pointer font-semibold transition-opacity duration-300 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed" disabled aria-label="Send message (currently disabled)">Send</button>
          </div>
        </div>
      )}
    </>
  );
};
