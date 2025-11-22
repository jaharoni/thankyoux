import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { isTouchDevice, prefersReducedMotion, isLowEndDevice } from './utils/deviceDetection';
import Slide1Cover from './slides/Slide1Cover';
import Slide2Concept from './slides/Slide2Concept';
import Slide3Vision from './slides/Slide3Vision';
import Slide4Design from './slides/Slide4Design';
import Slide5HowItWorks from './slides/Slide5HowItWorks';
import Slide6Technology from './slides/Slide6Technology';
import Slide7Themes from './slides/Slide7Themes';
import Slide8Exhibition from './slides/Slide8Exhibition';
import Slide9Collaboration from './slides/Slide9Collaboration';
import Slide10Closing from './slides/Slide10Closing';

const slides = [
  Slide1Cover,
  Slide2Concept,
  Slide3Vision,
  Slide4Design,
  Slide5HowItWorks,
  Slide6Technology,
  Slide7Themes,
  Slide8Exhibition,
  Slide9Collaboration,
  Slide10Closing,
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);
  const isTouch = isTouchDevice();
  const reducedMotion = prefersReducedMotion();
  const lowEndDevice = isLowEndDevice();
  const shouldReduceEffects = isTouch || reducedMotion || lowEndDevice;

  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  };

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goToNextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const diffX = touchStartX.current - touchEndX.current;
    const diffY = touchStartY.current - touchEndY.current;

    if (Math.abs(diffX) > swipeThreshold && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        goToNextSlide();
      } else {
        goToPrevSlide();
      }
    }
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div
      className="fixed inset-0 bg-[#0A0A0F] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {!lowEndDevice && <div className="scanlines" />}
      {!lowEndDevice && <div className="film-grain" />}

      {!isTouch && (
        <>
          <div
            className="fixed left-0 top-0 bottom-0 w-[10%] z-1"
            onClick={goToPrevSlide}
            onTouchEnd={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goToPrevSlide();
            }}
            style={{
              cursor: currentSlide === 0 ? 'default' : 'w-resize',
              pointerEvents: currentSlide === 0 ? 'none' : 'auto'
            }}
          />

          <div
            className="fixed right-0 top-0 bottom-0 w-[10%] z-1"
            onClick={goToNextSlide}
            onTouchEnd={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goToNextSlide();
            }}
            style={{
              cursor: currentSlide === slides.length - 1 ? 'default' : 'e-resize',
              pointerEvents: currentSlide === slides.length - 1 ? 'none' : 'auto'
            }}
          />
        </>
      )}

      <div className="relative w-full h-full-viewport overflow-hidden" style={{ zIndex: 10 }}>
        <CurrentSlideComponent direction={direction} />
      </div>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-[100]">
        <div className="flex items-center gap-4">
          <button
            onClick={goToPrevSlide}
            disabled={currentSlide === 0}
            className="w-10 h-10 md:w-6 md:h-6 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 select-none"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              opacity: currentSlide === 0 ? 0.3 : 1,
              cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
              pointerEvents: currentSlide === 0 ? 'none' : 'auto',
            }}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-4 md:h-4 text-white" strokeWidth={2} />
          </button>

          <button
            onClick={goToNextSlide}
            disabled={currentSlide === slides.length - 1}
            className="w-10 h-10 md:w-6 md:h-6 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 select-none"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              opacity: currentSlide === slides.length - 1 ? 0.3 : 1,
              cursor: currentSlide === slides.length - 1 ? 'not-allowed' : 'pointer',
              pointerEvents: currentSlide === slides.length - 1 ? 'none' : 'auto',
            }}
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-4 md:h-4 text-white" strokeWidth={2} />
          </button>
        </div>

        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => goToSlide(index)}
                onMouseEnter={() => !isTouch && setHoveredDot(index)}
                onMouseLeave={() => !isTouch && setHoveredDot(null)}
                onTouchStart={() => isTouch && setHoveredDot(index)}
                onTouchEnd={() => {
                  setTimeout(() => setHoveredDot(null), 1000);
                }}
                className={`rounded-full active:scale-90 select-none nav-dot-glow ${
                  index === currentSlide
                    ? 'nav-dot-active'
                    : ''
                }`}
                style={{
                  width: index === currentSlide ? '16px' : '8px',
                  height: '8px',
                  minWidth: isTouch ? '44px' : '8px',
                  minHeight: isTouch ? '44px' : '8px',
                  padding: isTouch ? '18px 0' : 0,
                  background: index === currentSlide
                    ? 'linear-gradient(135deg, #FF0080 0%, #FF0080 20%, #00F0FF 80%, #00F0FF 100%)'
                    : hoveredDot === index
                    ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.5))'
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.3))',
                  transition: 'all 0.3s ease, transform 0.2s ease',
                  transform: hoveredDot === index && !isTouch && index !== currentSlide ? 'scale(1.5)' : 'scale(1)',
                  boxShadow: index === currentSlide
                    ? `0 0 12px 2px rgba(255, 0, 128, 0.8),
                       0 0 20px 4px rgba(255, 0, 128, 0.6),
                       0 0 30px 6px rgba(255, 0, 128, 0.4),
                       0 0 15px 3px rgba(0, 240, 255, 0.7),
                       0 0 25px 5px rgba(0, 240, 255, 0.5),
                       inset 0 1px 2px rgba(255, 255, 255, 0.4),
                       0 2px 8px rgba(0, 0, 0, 0.3)`
                    : hoveredDot === index
                    ? `0 0 8px 2px rgba(255, 255, 255, 0.6),
                       0 0 15px 3px rgba(255, 255, 255, 0.4),
                       inset 0 1px 2px rgba(255, 255, 255, 0.3),
                       0 2px 6px rgba(0, 0, 0, 0.2)`
                    : `0 0 4px 1px rgba(255, 255, 255, 0.2),
                       0 1px 4px rgba(0, 0, 0, 0.2),
                       inset 0 0.5px 1px rgba(255, 255, 255, 0.2)`,
                  border: index === currentSlide
                    ? '1px solid rgba(255, 255, 255, 0.6)'
                    : hoveredDot === index
                    ? '1px solid rgba(255, 255, 255, 0.4)'
                    : '0.5px solid rgba(255, 255, 255, 0.15)',
                }}
                aria-label={`Go to slide ${index + 1}`}
              />

              {hoveredDot === index && (
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded whitespace-nowrap"
                     style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(10px)' }}>
                  <span className="text-white text-xs tracking-wider">
                    {index + 1}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-8 right-4 md:right-8 text-white/50 font-light text-xs md:text-sm tracking-[0.3em] z-[100]">
        {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </div>
  );
}

export default App;
