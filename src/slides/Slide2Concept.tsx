import { useEffect, useState } from 'react';
import { Disc3, Sparkles } from 'lucide-react';

export default function Slide2Concept({ direction }: { direction: number }) {
  const [visible, setVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState<'physical' | 'ai' | null>(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  const points = [
    'Physical media becomes living artwork',
    'AI interprets film data in real-time',
    'Nostalgia meets algorithmic creativity',
  ];

  return (
    <div className={`w-full min-h-screen h-screen md:h-full flex items-center justify-center gradient-bg-2 transition-all duration-700 ${
      visible ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full py-8 md:py-12 lg:py-0">
        <h2 className={`font-bold tracking-[0.15em] md:tracking-[0.2em] text-white mb-8 md:mb-12 lg:mb-20 transition-all duration-700 delay-200 ${
          visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`} style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(2rem, 6vw, 4rem)'
        }}>
          CONCEPT
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-8 md:mb-0">
          <div className={`transition-all duration-700 delay-400 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div
              className={`glass-card glass-card-clickable p-8 md:p-12 rounded-3xl transition-all duration-500 relative z-20 ${
                expandedCard === 'physical' ? 'scale-105 border-2 border-[#FF0080]' : ''
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setExpandedCard(expandedCard === 'physical' ? null : 'physical');
              }}
              onTouchEnd={(e) => {
                e.stopPropagation();
                setExpandedCard(expandedCard === 'physical' ? null : 'physical');
              }}
              style={{
                boxShadow: expandedCard === 'physical' ? '0 0 40px rgba(255, 0, 128, 0.6)' : undefined,
              }}
            >
              <Disc3 className="w-24 h-24 md:w-32 md:h-32 text-[#FF0080] mb-6 glow-pink mx-auto md:mx-0" strokeWidth={1.5} />
              <p className="text-white/60 text-base md:text-lg tracking-wide mb-4 text-center md:text-left">Physical Media</p>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expandedCard === 'physical' ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pt-4 border-t border-white/10 mt-4">
                  <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    DVDs contain video, audio, disc metadata, and personal context—each disc is a time capsule of memory
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-600 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div
              className={`glass-card glass-card-clickable p-8 md:p-12 rounded-3xl transition-all duration-500 relative z-20 ${
                expandedCard === 'ai' ? 'scale-105 border-2 border-[#00F0FF]' : ''
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setExpandedCard(expandedCard === 'ai' ? null : 'ai');
              }}
              onTouchEnd={(e) => {
                e.stopPropagation();
                setExpandedCard(expandedCard === 'ai' ? null : 'ai');
              }}
              style={{
                boxShadow: expandedCard === 'ai' ? '0 0 40px rgba(0, 240, 255, 0.6)' : undefined,
              }}
            >
              <Sparkles className="w-24 h-24 md:w-32 md:h-32 text-[#00F0FF] mb-6 glow-cyan mx-auto md:mx-0" strokeWidth={1.5} />
              <p className="text-white/60 text-base md:text-lg tracking-wide mb-4 text-center md:text-left">AI Artwork</p>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expandedCard === 'ai' ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pt-4 border-t border-white/10 mt-4">
                  <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Custom-trained AI models interpret the disc's content, generating unique living art that evolves with each playback
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6 mt-8 md:mt-12">
          {points.map((point, index) => (
            <div
              key={index}
              className={`glass-card p-4 md:p-6 rounded-2xl transition-all duration-700 ${
                visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${1000 + index * 200}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-gradient-to-r from-[#FF0080] to-[#00F0FF] rounded-full flex-shrink-0" />
                <p className="text-white text-base md:text-xl font-light tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {point}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
