import { useEffect, useState } from 'react';
import { Building2, Grid3x3, Landmark, Hexagon } from 'lucide-react';

export default function Slide8Exhibition({ direction }: { direction: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const scenarios = [
    {
      icon: Building2,
      title: 'Solo Gallery Installation',
      description: 'Intimate showcase featuring multiple PLAYBACK units',
      color: '#FF0080',
    },
    {
      icon: Grid3x3,
      title: 'Immersive Multi-Disc Space',
      description: 'Synchronized array creating a collective experience',
      color: '#00F0FF',
    },
    {
      icon: Landmark,
      title: 'Museum Collaboration',
      description: 'MoMA PS1, Superblue, institutional partnerships',
      color: '#FFD700',
    },
    {
      icon: Hexagon,
      title: 'NFT Collectibles Layer',
      description: 'Digital ownership tied to physical installations',
      color: '#FF0080',
    },
  ];

  return (
    <div className={`w-full min-h-full flex items-center justify-center gradient-bg-2 transition-all duration-700 ${
      visible ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full py-8 md:py-0">
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.2em] text-white mb-8 md:mb-12 transition-all duration-700 delay-200 ${
          visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          EXHIBITION
        </h2>

        <div className={`glass-card p-8 md:p-12 lg:p-16 rounded-3xl mb-8 md:mb-12 transition-all duration-700 delay-400 relative overflow-hidden ${
          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-4 md:grid-cols-6 gap-4 md:gap-8 p-4 md:p-8">
              {[...Array(18)].map((_, i) => (
                <div key={i} className="aspect-square rounded-full border border-white/20 flex items-center justify-center">
                  <div className="w-1/2 h-1/2 rounded-full bg-gradient-to-br from-[#FF0080] to-[#00F0FF]" />
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <p className="text-white/60 text-center text-base md:text-xl tracking-wider mb-3 md:mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              VIRTUAL GALLERY CONCEPT
            </p>
            <p className="text-white text-center text-sm md:text-lg tracking-wide leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Multiple PLAYBACK units creating a mesmerizing, synchronized visual symphony
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {scenarios.map((scenario, index) => {
            const Icon = scenario.icon;

            return (
              <div
                key={index}
                className={`glass-card p-6 md:p-8 rounded-3xl transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${600 + index * 150}ms`,
                  cursor: 'default',
                }}
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <div
                    className="w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: `${scenario.color}20`,
                    }}
                  >
                    <Icon className="w-6 h-6 md:w-8 md:h-8" style={{ color: scenario.color }} strokeWidth={1.5} />
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-wide" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {scenario.title}
                    </h3>
                    <p className="text-white/60 text-sm tracking-wide leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {scenario.description}
                    </p>
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
