import { useEffect, useState } from 'react';
import { Monitor, Disc3, Cpu, Lightbulb, Code, Layers, Video, FileCode } from 'lucide-react';

export default function Slide6Technology({ direction }: { direction: number }) {
  const [visible, setVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  const hardware = [
    {
      icon: Monitor,
      label: 'Circular OLED',
      color: '#FF0080',
      details: 'Custom 4K circular display. 360-degree visual canvas with edge-to-edge imagery',
    },
    {
      icon: Disc3,
      label: 'DVD Mechanism',
      color: '#00F0FF',
      details: 'Modified Blu-ray drive with custom firmware for metadata extraction and real-time playback sync',
    },
    {
      icon: Cpu,
      label: 'Mini PC',
      color: '#FFD700',
      details: 'Compact high-performance computer running the AI models. Handles real-time video processing and generative art rendering',
    },
    {
      icon: Lightbulb,
      label: 'LED Controller',
      color: '#FF0080',
      details: 'Programmable RGB lighting system. Syncs ambient glow effects with the AI-generated visuals for immersive atmosphere',
    },
  ];

  const software = [
    {
      icon: Code,
      label: 'OpenCV',
      color: '#00F0FF',
      details: 'Computer vision framework analyzes frames, detects scenes, extracts color palettes and motion patterns',
    },
    {
      icon: Layers,
      label: 'Custom LoRA',
      color: '#FFD700',
      details: 'AI model fine-tuned on ThankYouX\'s artistic style, trained to reinterpret media into his signature aesthetic',
    },
    {
      icon: Video,
      label: 'TouchDesigner',
      color: '#FF0080',
      details: 'Real-time visual programming platform. Orchestrates the generative art pipeline and circular display output',
    },
    {
      icon: FileCode,
      label: 'FFmpeg',
      color: '#00F0FF',
      details: 'Media processing toolkit. Decodes DVD video streams and extracts audio data for AI analysis',
    },
  ];

  return (
    <div className={`w-full min-h-full flex items-center justify-center gradient-bg-3 transition-all duration-700 ${
      visible ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full py-12 md:py-16">
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.2em] text-white mb-12 md:mb-16 transition-all duration-700 delay-200 ${
          visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          TECHNOLOGY
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className={`transition-all duration-700 delay-400 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6 md:mb-8 tracking-wider" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              HARDWARE
            </h3>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {hardware.map((item, index) => {
                const Icon = item.icon;
                const isExpanded = expandedCard === `hw-${index}`;
                return (
                  <div
                    key={index}
                    className={`glass-card glass-card-clickable p-4 md:p-6 rounded-2xl transition-all duration-500 relative z-20 ${
                      visible ? 'opacity-100' : 'opacity-0'
                    } ${isExpanded ? 'scale-105 border-2' : ''}`}
                    style={{
                      transitionDelay: `${600 + index * 100}ms`,
                      borderColor: isExpanded ? item.color : 'rgba(255,255,255,0.1)',
                      boxShadow: isExpanded ? `0 0 40px ${item.color}60` : undefined,
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedCard(isExpanded ? null : `hw-${index}`);
                    }}
                    onTouchEnd={(e) => {
                      e.stopPropagation();
                      setExpandedCard(isExpanded ? null : `hw-${index}`);
                    }}
                  >
                    <Icon
                      className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 mx-auto"
                      style={{ color: item.color }}
                      strokeWidth={1.5}
                    />
                    <p className="text-white text-center text-xs md:text-sm tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {item.label}
                    </p>

                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isExpanded ? 'max-h-32 opacity-100 mt-4' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-white/70 text-xs leading-relaxed text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {item.details}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`transition-all duration-700 delay-600 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6 md:mb-8 tracking-wider" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              SOFTWARE
            </h3>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {software.map((item, index) => {
                const Icon = item.icon;
                const isExpanded = expandedCard === `sw-${index}`;
                return (
                  <div
                    key={index}
                    className={`glass-card glass-card-clickable p-4 md:p-6 rounded-2xl transition-all duration-500 relative z-20 ${
                      visible ? 'opacity-100' : 'opacity-0'
                    } ${isExpanded ? 'scale-105 border-2' : ''}`}
                    style={{
                      transitionDelay: `${800 + index * 100}ms`,
                      borderColor: isExpanded ? item.color : 'rgba(255,255,255,0.1)',
                      boxShadow: isExpanded ? `0 0 40px ${item.color}60` : undefined,
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedCard(isExpanded ? null : `sw-${index}`);
                    }}
                    onTouchEnd={(e) => {
                      e.stopPropagation();
                      setExpandedCard(isExpanded ? null : `sw-${index}`);
                    }}
                  >
                    <Icon
                      className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 mx-auto"
                      style={{ color: item.color }}
                      strokeWidth={1.5}
                    />
                    <p className="text-white text-center text-xs md:text-sm tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {item.label}
                    </p>

                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isExpanded ? 'max-h-32 opacity-100 mt-4' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-white/70 text-xs leading-relaxed text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {item.details}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className={`mt-12 md:mt-16 glass-card p-6 md:p-8 rounded-3xl transition-all duration-700 delay-1200 ${
          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <p className="text-white/70 text-center text-sm md:text-lg tracking-wide leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            Cutting-edge hardware meets advanced AI software to create a seamless experience
            where physical media transcends into living, breathing digital art
          </p>
        </div>
      </div>
    </div>
  );
}
