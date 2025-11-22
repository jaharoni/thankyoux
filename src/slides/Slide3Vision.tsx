import { useEffect, useState } from 'react';
import { Sparkles, Disc3, Images } from 'lucide-react';

export default function Slide3Vision({ direction }: { direction: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const steps = [
    {
      icon: Disc3,
      title: 'Physical Records',
      description: 'Vintage vinyl becomes the canvas for artistic transformation',
      color: '#FF0080'
    },
    {
      icon: Sparkles,
      title: 'AI Processing',
      description: 'Machine learning interprets and reimagines the physical medium',
      color: '#00F0FF'
    },
    {
      icon: Images,
      title: 'Digital Art',
      description: 'New visual narratives emerge from forgotten sounds',
      color: '#FFD700'
    },
  ];

  return (
    <div className={`w-full min-h-screen h-screen md:h-full flex items-center justify-center gradient-bg-3 transition-all duration-700 ${
      visible ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full py-8 md:py-12 lg:py-16">
        <h2 className={`font-bold tracking-[0.15em] md:tracking-[0.2em] text-white mb-6 md:mb-8 lg:mb-12 text-center transition-all duration-700 delay-200 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`} style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(2rem, 6vw, 4rem)'
        }}>
          THE JOURNEY
        </h2>

        <div className={`glass-card p-6 md:p-10 lg:p-12 rounded-3xl mb-8 md:mb-12 transition-all duration-700 delay-300 ${
          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <p className="text-white/90 font-light leading-relaxed tracking-wide text-center"
             style={{
               fontSize: 'clamp(1.125rem, 2.5vw, 1.75rem)',
               fontFamily: "'Inter', sans-serif",
             }}>
            From forgotten vinyl to living digital art — a three-stage transformation that bridges past and future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`glass-card p-6 md:p-8 rounded-2xl transition-all duration-700 flex flex-col items-center text-center ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${500 + index * 200}ms`,
                }}
              >
                <div className="relative mb-6">
                  <div
                    className="absolute inset-0 rounded-full blur-2xl opacity-50"
                    style={{ backgroundColor: step.color }}
                  />
                  <Icon
                    className="relative w-14 h-14 md:w-16 md:h-16"
                    style={{ color: step.color }}
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-white tracking-wider mb-3 md:mb-4"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {step.title}
                </h3>

                <p className="text-sm md:text-base text-white/70 leading-relaxed"
                   style={{ fontFamily: "'Inter', sans-serif" }}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
