import { useEffect, useState } from 'react';
import { Sparkles, RefreshCw, Package } from 'lucide-react';

export default function Slide7Themes({ direction }: { direction: number }) {
  const [visible, setVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  const themes = [
    {
      icon: Sparkles,
      title: 'REANIMATION',
      subtitle: 'Obsolete media becomes living art',
      details: 'Obsolete physical media—DVDs gathering dust—are given new life as dynamic art installations. Technology becomes sculpture',
      color: '#FF0080',
    },
    {
      icon: RefreshCw,
      title: 'MEMORY LOOP',
      subtitle: 'Plays endlessly, never the same twice',
      details: 'Each playback is unique. The AI reinterprets the source material endlessly, creating an infinite gallery of variations from a single disc',
      color: '#00F0FF',
    },
    {
      icon: Package,
      title: 'PHYSICAL PRESENCE',
      subtitle: 'DVD as sculptural relic',
      details: 'In a digital age, the DVD becomes a sculptural relic. Physical object meets digital interpretation—bridging analog nostalgia with AI futurity',
      color: '#FFD700',
    },
  ];

  return (
    <div className={`w-full min-h-screen h-screen md:h-full flex items-center justify-center gradient-bg-1 transition-all duration-700 ${
      visible ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full py-8 md:py-12 lg:py-16">
        <h2 className={`font-bold tracking-[0.15em] md:tracking-[0.2em] text-white mb-8 md:mb-12 lg:mb-16 transition-all duration-700 delay-200 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`} style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(2rem, 6vw, 4rem)'
        }}>
          THEMES
        </h2>

        <div className="space-y-6 md:space-y-8">
          {themes.map((theme, index) => {
            const Icon = theme.icon;
            const isExpanded = expandedCard === index;

            return (
              <div
                key={index}
                className={`glass-card glass-card-clickable rounded-3xl transition-all duration-700 relative z-20 ${
                  visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                } ${isExpanded ? 'scale-105' : 'scale-100'}`}
                style={{
                  transitionDelay: `${400 + index * 200}ms`,
                  borderColor: isExpanded ? theme.color : 'rgba(255,255,255,0.1)',
                  borderWidth: isExpanded ? '2px' : '1px',
                  boxShadow: isExpanded ? `0 0 40px ${theme.color}60` : 'none',
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setExpandedCard(isExpanded ? null : index);
                }}
                onTouchEnd={(e) => {
                  e.stopPropagation();
                  setExpandedCard(isExpanded ? null : index);
                }}
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div
                      className="w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${theme.color}20` }}
                    >
                      <Icon className="w-6 h-6 md:w-8 md:h-8" style={{ color: theme.color }} strokeWidth={1.5} />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl md:text-3xl font-bold tracking-[0.2em] mb-1 md:mb-2" style={{ color: theme.color, fontFamily: "'Space Grotesk', sans-serif" }}>
                        {theme.title}
                      </h3>
                      <p className="text-white/70 text-sm md:text-lg tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {theme.subtitle}
                      </p>
                    </div>

                    <div
                      className={`text-white/40 transition-transform duration-500 ${
                        isExpanded ? 'rotate-180' : 'rotate-0'
                      }`}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <polyline points="6 9 12 15 18 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isExpanded ? 'max-h-48 opacity-100 mt-6' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-4 md:pt-6 border-t border-white/10">
                      <p className="text-white/60 text-xs md:text-base leading-relaxed tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {theme.details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
