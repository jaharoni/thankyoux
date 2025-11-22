import { useEffect, useState } from 'react';
import { Brain, Cpu, Zap, Layers } from 'lucide-react';

export default function Slide3Vision({ direction }: { direction: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const themes = [
    { icon: Brain, label: 'Memory', opposite: 'Machine', color: '#FF0080' },
    { icon: Cpu, label: 'Physical', opposite: 'Digital', color: '#00F0FF' },
    { icon: Zap, label: 'Static', opposite: 'Living', color: '#FFD700' },
    { icon: Layers, label: 'Tactile', opposite: 'Ethereal', color: '#FF0080' },
  ];

  return (
    <div className={`w-full min-h-full flex items-center justify-center gradient-bg-3 transition-all duration-700 ${
      visible ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full py-12 md:py-16">
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.2em] text-white mb-8 md:mb-12 transition-all duration-700 delay-200 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          ARTISTIC VISION
        </h2>

        <div className={`glass-card p-8 md:p-12 rounded-3xl mb-12 md:mb-16 transition-all duration-700 delay-400 ${
          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <p className="text-2xl md:text-3xl lg:text-4xl text-white font-light leading-relaxed tracking-wide"
             style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic' }}>
            "Every disc holds a memory. AI is the interpreter."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {themes.map((theme, index) => {
            const Icon = theme.icon;
            return (
              <div
                key={index}
                className={`glass-card p-6 md:p-8 rounded-2xl transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${600 + index * 150}ms`,
                  cursor: 'default',
                }}
              >
                <Icon className="w-10 h-10 md:w-12 md:h-12 mb-4"
                      style={{ color: theme.color }}
                      strokeWidth={1.5} />
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="text-xl md:text-2xl font-semibold text-white tracking-wider" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {theme.label}
                  </span>
                  <span className="text-white/40 text-lg md:text-xl">↔</span>
                  <span className="text-xl md:text-2xl font-semibold tracking-wider"
                        style={{ color: theme.color, fontFamily: "'Space Grotesk', sans-serif" }}>
                    {theme.opposite}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
