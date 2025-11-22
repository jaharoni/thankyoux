import { useEffect, useState } from 'react';
import { Play, Brain, Palette } from 'lucide-react';

export default function Slide5HowItWorks({ direction }: { direction: number }) {
  const [visible, setVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [clickedStep, setClickedStep] = useState<number | null>(null);

  useEffect(() => {
    setVisible(true);
    const interval = setInterval(() => {
      if (clickedStep === null) {
        setActiveStep((prev) => (prev + 1) % 3);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [clickedStep]);

  const steps = [
    {
      icon: Play,
      title: 'INPUT',
      items: ['DVD Video', 'Audio Track', 'Disc Data'],
      details: 'DVD inserted → Mechanism reads video, extracts audio, parses disc metadata and chapter markers',
      color: '#FF0080',
    },
    {
      icon: Brain,
      title: 'INTERPRETATION',
      items: ['AI Visual Gen', 'Mood Analysis', 'Binary Mapping'],
      details: 'Custom LoRA model trained on ThankYouX aesthetic + disc content = Unique AI interpretation',
      color: '#00F0FF',
    },
    {
      icon: Palette,
      title: 'OUTPUT',
      items: ['Real-time Art', 'Color/Motion', 'Patterns'],
      details: 'Circular OLED displays living artwork that evolves throughout the disc\'s runtime. Never the same twice',
      color: '#FFD700',
    },
  ];

  return (
    <div className={`w-full min-h-full flex items-center justify-center gradient-bg-2 transition-all duration-700 ${
      visible ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full py-8 md:py-0">
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.2em] text-white mb-12 md:mb-20 transition-all duration-700 delay-200 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          HOW IT WORKS
        </h2>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#FF0080] via-[#00F0FF] to-[#FFD700] transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 lg:gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              const isClicked = clickedStep === index;

              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  } ${isActive || isClicked ? 'scale-105 md:scale-105' : 'scale-100'}`}
                  style={{ transitionDelay: `${400 + index * 200}ms` }}
                >
                  <div
                    className={`glass-card glass-card-clickable rounded-3xl transition-all duration-500 overflow-hidden relative z-20 ${
                      isActive || isClicked ? 'border-2' : 'border border-white/10'
                    }`}
                    style={{
                      borderColor: (isActive || isClicked) ? step.color : 'rgba(255,255,255,0.1)',
                      boxShadow: (isActive || isClicked) ? `0 0 40px ${step.color}80` : 'none',
                      padding: '1.5rem',
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setClickedStep(isClicked ? null : index);
                    }}
                    onTouchEnd={(e) => {
                      e.stopPropagation();
                      setClickedStep(isClicked ? null : index);
                    }}
                  >
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 mx-auto transition-all duration-500 ${
                      (isActive || isClicked) ? 'animate-pulse-glow' : ''
                    }`}
                    style={{
                      backgroundColor: `${step.color}20`,
                      boxShadow: (isActive || isClicked) ? `0 0 30px ${step.color}60` : 'none',
                    }}>
                      <Icon className="w-7 h-7 md:w-8 md:h-8" style={{ color: step.color }} strokeWidth={1.5} />
                    </div>

                    <h3
                      className="font-bold text-center mb-4 tracking-wide break-words"
                      style={{
                        color: step.color,
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '1.3rem',
                        lineHeight: '1.3',
                        wordWrap: 'break-word',
                        maxWidth: '100%',
                      }}
                    >
                      {step.title}
                    </h3>

                    <div className="space-y-2 mb-4">
                      {step.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className={`text-center text-white/70 tracking-wide transition-all duration-500 ${
                            (isActive || isClicked) ? 'opacity-100' : 'opacity-60'
                          }`}
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.85rem',
                            lineHeight: '1.4',
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isClicked ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pt-4 border-t border-white/10" style={{ padding: '1rem 0 0 0' }}>
                        <p
                          className="text-white/70 text-center"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.9rem',
                            lineHeight: '1.6',
                            wordWrap: 'break-word',
                            maxWidth: '100%',
                          }}
                        >
                          {step.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`mt-12 md:mt-16 text-center transition-all duration-700 delay-1000 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}>
          <p className="text-white/50 text-sm md:text-lg tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
            Seamless transformation from physical media to living digital art
          </p>
        </div>
      </div>
    </div>
  );
}
