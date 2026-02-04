import './Body.css';

const healthQuotes = [
  {
    id: 1,
    quote: "Take care of your body. It's the only place you have to live.",
    author: "Jim Rohn"
  },
  {
    id: 2,
    quote: "Health is not about the weight you lose, but the life you gain.",
    author: "Unknown"
  },
  {
    id: 3,
    quote: "Your body hears everything your mind says. Stay positive.",
    author: "Naomi Judd"
  },
  {
    id: 4,
    quote: "The greatest wealth is health.",
    author: "Virgil"
  },
  {
    id: 5,
    quote: "Self-care is giving the world the best of you, instead of what's left of you.",
    author: "Katie Reed"
  },
  {
    id: 6,
    quote: "A healthy outside starts from the inside.",
    author: "Robert Urich"
  },
  {
    id: 7,
    quote: "Health is a relationship between you and your body.",
    author: "Terri Guillemets"
  },
  {
    id: 8,
    quote: "Taking care of yourself doesn't mean me first, it means me too.",
    author: "L.R. Knost"
  }
];

export const Body = () => {
  return (
    <section className="body-section">
      <h2 className="body-title">Wellness Inspiration</h2>
      <div className="quotes-container">
                {healthQuotes.map((item) => (
                    <div key={item.id} className="quote-card">
                        <p className="quote-text">"{item.quote}"</p>
                        <p className="quote-author">— {item.author}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
