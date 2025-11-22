export const isTouchDevice = (): boolean => {
  if (typeof window === 'undefined') return false;

  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    (navigator as any).msMaxTouchPoints > 0
  );
};

export const useIsTouchDevice = (): boolean => {
  if (typeof window === 'undefined') return false;

  return isTouchDevice();
};

export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  return mediaQuery.matches;
};

export const isLowEndDevice = (): boolean => {
  if (typeof window === 'undefined') return false;

  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;

  if (connection) {
    const slowConnection = connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g';
    const saveData = connection.saveData === true;
    if (slowConnection || saveData) return true;
  }

  const cores = navigator.hardwareConcurrency;
  if (cores && cores <= 2) return true;

  const memory = (navigator as any).deviceMemory;
  if (memory && memory <= 2) return true;

  return false;
};
