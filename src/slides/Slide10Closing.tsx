import { useEffect, useState, useRef } from 'react';
import { Mail, Globe, Instagram, Twitter } from 'lucide-react';

export default function Slide10Closing({ direction }: { direction: number }) {
  const [visible, setVisible] = useState(false);
  const [touchedCard, setTouchedCard] = useState<number | null>(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  const contacts = [
    { icon: Mail, label: 'Email', value: 'hello@playback.art', color: '#FF0080' },
    { icon: Globe, label: 'Website', value: 'playback.art', color: '#00F0FF' },
    { icon: Instagram, label: 'Instagram', value: '@playback_art', color: '#FFD700' },
    { icon: Twitter, label: 'Twitter', value: '@playback_art', color: '#FF0080' },
  ];

  return (
    <div className={`w-full h-full flex items-center justify-center relative overflow-hidden transition-all duration-1000 ${
      visible ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(circle at 20% 30%, rgba(255, 0, 128, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(0, 240, 255, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.15) 0%, transparent 60%),
          #0A0A0F
        `,
      }}>
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 lg:px-16 text-center py-8 md:py-12 lg:py-16">
        <div className={`mb-8 md:mb-16 transition-all duration-1000 delay-200 ${
          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="glass-card p-6 md:p-12 lg:p-16 rounded-3xl">
            <p className="text-white leading-relaxed tracking-wide"
               style={{
                 fontSize: 'clamp(1.25rem, 4vw, 3rem)',
                 fontFamily: "'Fraunces', serif",
                 fontStyle: 'italic'
               }}>
              "Every medium decays — but meaning can be remixed forever."
            </p>
          </div>
        </div>

        <h2 className={`font-bold tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] text-white mb-6 md:mb-8 lg:mb-12 transition-all duration-1000 delay-400 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(1.5rem, 5vw, 4rem)'
        }}>
          LET'S CREATE THE FUTURE OF MEMORY
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-16">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <div
                key={index}
                className={`glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-500 cursor-pointer relative z-20 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${
                  touchedCard === index ? 'scale-105' : ''
                }`}
                style={{
                  transitionDelay: `${600 + index * 150}ms`,
                  borderColor: touchedCard === index ? contact.color : undefined,
                  boxShadow: touchedCard === index ? `0 0 30px ${contact.color}60` : undefined,
                }}
                onClick={(e) => e.stopPropagation()}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = contact.color;
                  e.currentTarget.style.boxShadow = `0 0 30px ${contact.color}60`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                onTouchStart={() => setTouchedCard(index)}
                onTouchEnd={() => setTimeout(() => setTouchedCard(null), 300)}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" style={{ color: contact.color }} strokeWidth={1.5} />
                  <div className="text-left">
                    <p className="text-white/50 text-xs tracking-wider mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>{contact.label}</p>
                    <p className="text-white text-sm md:text-lg tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>{contact.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`transition-all duration-1000 delay-1400 ${
          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}>
          <button
            className="glass-card px-8 md:px-16 py-4 md:py-6 rounded-full text-lg md:text-2xl font-bold tracking-[0.3em] text-white hover:scale-110 active:scale-95 transition-all duration-500 group relative overflow-hidden z-20"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF0080] via-[#00F0FF] to-[#FFD700] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00F0FF] rounded-full transition-all duration-500" />
            <span className="relative z-10">GET IN TOUCH</span>
          </button>
        </div>

        <div className={`mt-8 md:mt-16 flex items-center justify-center gap-3 transition-all duration-1000 delay-1600 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent to-white/20" />
          <p className="text-white/30 text-xs md:text-sm tracking-[0.3em] md:tracking-[0.5em]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>PLAYBACK × THANKYOUX</p>
          <div className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent to-white/20" />
        </div>
      </div>
    </div>
  );
}
