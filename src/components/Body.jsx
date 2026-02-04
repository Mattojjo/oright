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
    <section className="py-16 px-8 pb-32 max-w-[1400px] mx-auto">
      <h2 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600 mb-12">Wellness Inspiration</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 p-4">
                {healthQuotes.map((item) => (
                    <div key={item.id} className="bg-gradient-to-br from-white to-cyan-50 p-8 rounded-2xl shadow-[0_4px_20px_rgba(6,182,212,0.15)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(139,92,246,0.25)] flex flex-col justify-between min-h-[200px] border-2 border-cyan-100 hover:border-purple-200">
                        <p className="text-lg leading-relaxed text-slate-700 italic m-0 mb-6 flex-grow">"{item.quote}"</p>
                        <p className="text-[0.95rem] text-cyan-600 font-semibold text-right m-0">— {item.author}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
