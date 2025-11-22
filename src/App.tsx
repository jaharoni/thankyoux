import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import { isTouchDevice, prefersReducedMotion, isLowEndDevice } from './utils/deviceDetection';
import Slide1Cover from './slides/Slide1Cover';
import Slide2Concept from './slides/Slide2Concept';
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
  Slide4Design,
  Slide5HowItWorks,
  Slide6Technology,
  Slide7Themes,
  Slide8Exhibition,
  Slide9Collaboration,
  Slide10Closing,
];

const slideNames = [
  'Cover',
  'Concept',
  'Design',
  'How It Works',
  'Technology',
  'Themes',
  'Exhibition',
  'Collaboration',
  'Closing',
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);
  const isTouch = isTouchDevice();
  const reducedMotion = prefersReducedMotion();
  const lowEndDevice = isLowEndDevice();
  const shouldReduceEffects = isTouch || reducedMotion || lowEndDevice;
  const observerRef = useRef<IntersectionObserver | null>(null);

  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      const nextSlide = currentSlide + 1;
      setCurrentSlide(nextSlide);
      if (isMobile) {
        const slideElement = document.getElementById(`slide-${nextSlide}`);
        slideElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      const prevSlide = currentSlide - 1;
      setCurrentSlide(prevSlide);
      if (isMobile) {
        const slideElement = document.getElementById(`slide-${prevSlide}`);
        slideElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    if (isMobile) {
      const slideElement = document.getElementById(`slide-${index}`);
      slideElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const slideId = entry.target.id;
            const slideIndex = parseInt(slideId.replace('slide-', ''));
            if (!isNaN(slideIndex) && slideIndex !== currentSlide) {
              setCurrentSlide(slideIndex);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px',
      }
    );

    const timeoutId = setTimeout(() => {
      slides.forEach((_, index) => {
        const slideElement = document.getElementById(`slide-${index}`);
        if (slideElement && observerRef.current) {
          observerRef.current.observe(slideElement);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isMobile]);

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
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      if (Math.abs(diffY) > swipeThreshold && Math.abs(diffY) > Math.abs(diffX)) {
        if (diffY > 0) {
          goToNextSlide();
        } else {
          goToPrevSlide();
        }
      }
    } else {
      if (Math.abs(diffX) > swipeThreshold && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) {
          goToNextSlide();
        } else {
          goToPrevSlide();
        }
      }
    }
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div
      className="fixed inset-0 bg-[#0A0A0F] overflow-y-auto md:overflow-hidden snap-y snap-mandatory md:snap-none"
      style={{ scrollBehavior: 'smooth' }}
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

      <button
        onClick={() => setMenuOpen(true)}
        className="fixed top-4 right-4 md:top-6 md:right-6 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 z-[100]"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
        }}
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6 text-white" strokeWidth={2} />
      </button>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150]"
            onClick={() => setMenuOpen(false)}
          />
          <div
            className="fixed top-0 right-0 bottom-0 w-[280px] bg-[#0A0A0F]/95 backdrop-blur-xl border-l border-white/10 z-[200] overflow-y-auto"
            style={{
              animation: 'slideInRight 0.3s ease-out',
            }}
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-white text-lg font-semibold tracking-wider">Navigation</h2>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-white" strokeWidth={2} />
              </button>
            </div>
            <nav className="p-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    goToSlide(index);
                    setMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-gradient-to-r from-[#FF0080]/20 to-[#00F0FF]/20 border border-[#FF0080]/40'
                      : 'hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-mono ${
                        index === currentSlide ? 'text-[#FF0080]' : 'text-white/40'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`text-sm ${
                        index === currentSlide ? 'text-white font-medium' : 'text-white/70'
                      }`}
                    >
                      {slideNames[index]}
                    </span>
                  </div>
                </button>
              ))}
            </nav>
          </div>
        </>
      )}

      <div className="relative w-full min-h-full md:h-full-viewport md:overflow-hidden" style={{ zIndex: 10 }}>
        {isMobile ? (
          slides.map((SlideComponent, index) => (
            <div
              key={index}
              id={`slide-${index}`}
              className="snap-start snap-always"
            >
              <SlideComponent direction={direction} />
            </div>
          ))
        ) : (
          <CurrentSlideComponent direction={direction} />
        )}
      </div>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-[100]">
        <button
          onClick={goToPrevSlide}
          disabled={currentSlide === 0}
          className="w-10 h-10 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 select-none"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
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
          className="w-10 h-10 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 select-none"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            opacity: currentSlide === slides.length - 1 ? 0.3 : 1,
            cursor: currentSlide === slides.length - 1 ? 'not-allowed' : 'pointer',
            pointerEvents: currentSlide === slides.length - 1 ? 'none' : 'auto',
          }}
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-4 md:h-4 text-white" strokeWidth={2} />
        </button>
      </div>

      <div className="fixed bottom-8 right-4 md:right-8 text-white/50 font-light text-xs md:text-sm tracking-[0.3em] z-[100]">
        {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </div>
  );
}

export default App;
