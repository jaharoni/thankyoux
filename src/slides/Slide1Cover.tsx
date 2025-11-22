import { useEffect, useState } from 'react';
import { Disc3 } from 'lucide-react';

const BrushStrokePattern = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full animate-spin-slow"
      viewBox="0 0 200 200"
      style={{ opacity: 0.4 }}
    >
      <defs>
        <linearGradient id="brushGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FF0080', stopOpacity: 0.8 }} />
          <stop offset="50%" style={{ stopColor: '#00F0FF', stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: '#FFD700', stopOpacity: 0.8 }} />
        </linearGradient>
      </defs>

      <path
        d="M 30 100 Q 50 70, 80 80 T 130 90 Q 150 95, 170 80"
        stroke="url(#brushGradient)"
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
        stroke="url(#brushGradient)"
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
        stroke="url(#brushGradient)"
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
        stroke="url(#brushGradient)"
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

export default function Slide1Cover({ direction }: { direction: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className={`w-full min-h-screen md:h-full flex items-center justify-center gradient-bg-1 transition-all duration-1000 px-4 py-8 md:py-0 ${
      visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
    }`}>
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
        <div className={`mb-8 md:mb-12 flex justify-center transition-all duration-1000 delay-300 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <div className="relative animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF0080] via-[#00F0FF] to-[#FFD700] blur-3xl opacity-50 animate-spin-slow" />

            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <BrushStrokePattern />
              <Disc3 className="absolute inset-0 w-full h-full text-white" strokeWidth={1} style={{ animation: 'spin-slow 20s linear infinite reverse' }} />
            </div>

            <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-[#FF0080] via-[#00F0FF] to-[#FFD700] bg-clip-border animate-spin-slow"
                 style={{ clipPath: 'circle(50% at 50% 50%)' }} />
          </div>
        </div>

        <h1
          className={`font-black tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] mb-4 md:mb-6 transition-all duration-1000 delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 'clamp(2.5rem, 8vw, 9rem)',
            lineHeight: '1.1',
          }}
        >
          <span className="glitch text-white" data-text="PLAYBACK">
            PLAYBACK
          </span>
        </h1>

        <p className={`text-white/80 font-light tracking-[0.2em] sm:tracking-[0.3em] mb-3 md:mb-4 transition-all duration-1000 delay-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(0.875rem, 2.5vw, 1.5rem)'
        }}>
          Reanimating Memory Through AI
        </p>

        <p className={`text-sm md:text-lg lg:text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] via-[#00F0FF] to-[#FFD700] transition-all duration-1000 delay-900 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic' }}>
          A Collaboration with ThankYouX
        </p>

        <div className={`mt-12 md:mt-16 text-white/40 text-xs md:text-sm tracking-widest transition-all duration-1000 delay-1100 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Press → or SPACE to continue
        </div>
      </div>
    </div>
  );
}
