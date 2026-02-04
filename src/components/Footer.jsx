import { ChatBubble } from './subComponents/ChatBubble';

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md px-8 py-4 text-center z-[100] border-t-2 border-cyan-100">
      <ChatBubble />
      <div className="text-slate-600">
        <p className="m-0 text-sm">&copy; {new Date().getFullYear()} oRight. All rights reserved.</p>
      </div>
    </footer>
  );
};
