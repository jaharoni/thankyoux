import { useEffect, useState } from 'react';
import { Circle, Box, Lightbulb, Grid3x3 } from 'lucide-react';

const BrushStrokePattern = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full animate-spin-slow"
      viewBox="0 0 200 200"
      style={{ opacity: 0.35 }}
    >
      <defs>
        <linearGradient id="brushGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FF0080', stopOpacity: 0.8 }} />
          <stop offset="50%" style={{ stopColor: '#00F0FF', stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: '#FFD700', stopOpacity: 0.8 }} />
        </linearGradient>
      </defs>

      <path
        d="M 30 100 Q 50 70, 80 80 T 130 90 Q 150 95, 170 80"
        stroke="url(#brushGradient4)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: '200',
          strokeDashoffset: '0',
          animation: 'brushStroke 3s ease-in-out infinite',
        }}
      />

      <path
        d="M 100 30 Q 110 50, 120 70 T 115 120 Q 110 140, 100 160"
        stroke="url(#brushGradient4)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
        style={{
          strokeDasharray: '180',
          strokeDashoffset: '0',
          animation: 'brushStroke 3.5s ease-in-out infinite 0.5s',
        }}
      />

      <path
        d="M 60 50 Q 80 60, 100 55 T 140 60 Q 150 65, 160 75"
        stroke="url(#brushGradient4)"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
        style={{
          strokeDasharray: '160',
          strokeDashoffset: '0',
          animation: 'brushStroke 4s ease-in-out infinite 1s',
        }}
      />

      <path
        d="M 70 120 Q 90 130, 110 125 T 150 135"
        stroke="url(#brushGradient4)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
        style={{
          strokeDasharray: '140',
          strokeDashoffset: '0',
          animation: 'brushStroke 3.8s ease-in-out infinite 1.5s',
        }}
      />
    </svg>
  );
};

export default function Slide4Design({ direction }: { direction: number }) {
  const [visible, setVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  const materials = [
    {
      icon: Circle,
      label: 'Circular OLED Ring',
      description: 'High-res display',
      details: '4K resolution display creates an infinite canvas. Content morphs and flows in mesmerizing circular patterns synchronized to the disc\'s runtime',
    },
    {
      icon: Box,
      label: 'Transparent Acrylic',
      description: 'Crystal housing',
      details: 'Museum-grade housing showcases the physical DVD while protecting mechanics. The disc becomes part of the art itself',
    },
    {
      icon: Lightbulb,
      label: 'LED Reactive Lighting',
      description: 'Dynamic glow',
      details: 'Ambient backlighting responds to AI-generated visuals, casting dynamic glows that transform the surrounding space',
    },
    {
      icon: Grid3x3,
      label: 'Minimal Stand',
      description: 'Floating aesthetic',
      details: 'Floating aesthetic with hidden mechanics. Cable management integrated for clean gallery presentation',
    },
  ];

  return (
    <div className={`w-full min-h-screen md:h-full flex items-center justify-center gradient-bg-1 transition-all duration-700 ${
      visible ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full py-8 md:py-12 lg:py-0">
        <h2 className={`font-bold tracking-[0.15em] md:tracking-[0.2em] text-white mb-8 md:mb-12 lg:mb-16 transition-all duration-700 delay-200 ${
          visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`} style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(2rem, 6vw, 4rem)'
        }}>
          VISUAL DESIGN
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className={`relative transition-all duration-700 delay-400 order-2 lg:order-1 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FF0080] via-[#00F0FF] to-[#FFD700] blur-3xl opacity-30 animate-pulse-glow" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[90%] h-[90%] rounded-full border-4 md:border-8 border-white/10 flex items-center justify-center backdrop-blur-sm">
                  <div className="w-[80%] h-[80%] rounded-full border-2 md:border-4 border-[#00F0FF] glow-cyan flex items-center justify-center relative">
                    <BrushStrokePattern />
                    <Circle className="w-24 h-24 md:w-32 md:h-32 text-white relative z-10" strokeWidth={0.5} style={{ animation: 'spin-slow 20s linear infinite reverse' }} />
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-white/20 rounded-full"
                   style={{ boxShadow: '0 0 60px rgba(255,255,255,0.1)' }} />
            </div>
          </div>

          <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
            {materials.map((material, index) => {
              const Icon = material.icon;
              const isExpanded = expandedIndex === index;
              return (
                <div
                  key={index}
                  className={`glass-card glass-card-clickable p-4 md:p-6 rounded-2xl transition-all duration-500 relative z-20 ${
                    visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  } ${isExpanded ? 'scale-105 border-2 border-[#00F0FF]' : ''}`}
                  style={{
                    transitionDelay: `${600 + index * 150}ms`,
                    boxShadow: isExpanded ? '0 0 40px rgba(0, 240, 255, 0.6)' : undefined,
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedIndex(isExpanded ? null : index);
                  }}
                  onTouchEnd={(e) => {
                    e.stopPropagation();
                    setExpandedIndex(isExpanded ? null : index);
                  }}
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <Icon className={`w-8 h-8 md:w-10 md:h-10 transition-colors duration-300 flex-shrink-0 ${
                      isExpanded ? 'text-[#00F0FF]' : 'text-white/60'
                    }`} strokeWidth={1.5} />
                    <div className="flex-1">
                      <h3 className="text-base md:text-xl font-semibold text-white tracking-wide mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {material.label}
                      </h3>
                      <p className="text-white/50 text-xs md:text-sm tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {material.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isExpanded ? 'max-h-32 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-white/70 text-xs md:text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {material.details}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
