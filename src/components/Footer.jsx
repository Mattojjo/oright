import { ChatBubble } from './subComponents/ChatBubble';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <ChatBubble />
            <div className="footer-content">
                <p>&copy; 2026 oRight. All rights reserved.</p>
            </div>
        </footer>
    );
};
