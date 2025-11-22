import { useEffect, useState } from 'react';
import { Lightbulb, Cpu, Hammer, Rocket } from 'lucide-react';

export default function Slide9Collaboration({ direction }: { direction: number }) {
  const [visible, setVisible] = useState(false);
  const [progressPhase, setProgressPhase] = useState(0);

  useEffect(() => {
    setVisible(true);
    const interval = setInterval(() => {
      setProgressPhase((prev) => (prev + 1) % 4);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const phases = [
    {
      icon: Lightbulb,
      title: 'Concept Development',
      duration: '2 weeks',
      tasks: ['Creative direction', 'Technical specs', 'Visual identity'],
      color: '#FF0080',
    },
    {
      icon: Cpu,
      title: 'AI Model Training',
      duration: '4 weeks',
      tasks: ['Custom LoRA training', 'Style optimization', 'Testing iterations'],
      color: '#00F0FF',
    },
    {
      icon: Hammer,
      title: 'Hardware Build',
      duration: '6 weeks',
      tasks: ['Physical fabrication', 'Electronics integration', 'System assembly'],
      color: '#FFD700',
    },
    {
      icon: Rocket,
      title: 'Exhibition Launch',
      duration: '2 weeks',
      tasks: ['Installation setup', 'Public premiere', 'Documentation'],
      color: '#FF0080',
    },
  ];

  return (
    <div className={`w-full min-h-full flex items-center justify-center gradient-bg-3 transition-all duration-700 ${
      visible ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full py-12 md:py-16">
        <h2 className={`text-3xl md:text-5xl lg:text-6xl font-bold tracking-[0.2em] text-white mb-8 md:mb-16 transition-all duration-700 delay-200 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          COLLABORATION PATH
        </h2>

        <div className="relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-white/10" />
          <div
            className="hidden md:block absolute top-8 left-0 h-1 bg-gradient-to-r from-[#FF0080] via-[#00F0FF] to-[#FFD700] transition-all duration-1000"
            style={{
              width: `${((progressPhase + 1) / 4) * 100}%`,
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isActive = index <= progressPhase;

              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${400 + index * 200}ms` }}
                >
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center transition-all duration-500 ${
                      isActive ? 'scale-110' : 'scale-100'
                    }`}
                    style={{
                      backgroundColor: isActive ? phase.color : 'rgba(255,255,255,0.1)',
                      boxShadow: isActive ? `0 0 30px ${phase.color}80` : 'none',
                    }}
                  >
                    <Icon
                      className={`w-6 h-6 md:w-8 md:h-8 transition-colors duration-500 ${
                        isActive ? 'text-white' : 'text-white/30'
                      }`}
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className={`glass-card p-4 md:p-6 rounded-2xl transition-all duration-500 ${
                    isActive ? 'border-2' : 'border border-white/10'
                  }`}
                  style={{
                    borderColor: isActive ? phase.color : 'rgba(255,255,255,0.1)',
                    boxShadow: isActive ? `0 0 20px ${phase.color}40` : 'none',
                  }}>
                    <div className="text-center mb-3 md:mb-4">
                      <h3 className="text-sm md:text-lg font-bold text-white mb-1 tracking-wide" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Phase {index + 1}
                      </h3>
                      <p className="text-base md:text-xl font-semibold tracking-wider" style={{ color: phase.color, fontFamily: "'Space Grotesk', sans-serif" }}>
                        {phase.title}
                      </p>
                      <p className="text-white/50 text-xs md:text-sm mt-1 md:mt-2 tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>{phase.duration}</p>
                    </div>

                    <div className="space-y-1 md:space-y-2">
                      {phase.tasks.map((task, taskIndex) => (
                        <div
                          key={taskIndex}
                          className={`text-white/60 text-xs tracking-wide transition-all duration-500 ${
                            isActive ? 'opacity-100' : 'opacity-40'
                          }`}
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          • {task}
                        </div>
                      ))}
                    </div>

                    <div className="mt-3 md:mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full transition-all duration-1000"
                        style={{
                          width: isActive ? '100%' : '0%',
                          backgroundColor: phase.color,
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`mt-8 md:mt-16 text-center transition-all duration-700 delay-1400 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}>
          <p className="text-white/60 text-sm md:text-lg tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
            Total Timeline: 14 weeks from concept to exhibition
          </p>
        </div>
      </div>
    </div>
  );
}
