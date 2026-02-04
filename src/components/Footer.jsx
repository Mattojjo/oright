import { ChatBubble } from './subComponents/ChatBubble';

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#FFF8E7] px-8 py-4 text-center z-[100] border-t border-[#E8DCC8]">
      <ChatBubble />
      <div className="text-[#7A6A53]">
        <p className="m-0 text-sm">&copy; {new Date().getFullYear()} oRight. All rights reserved.</p>
      </div>
    </footer>
  );
};
