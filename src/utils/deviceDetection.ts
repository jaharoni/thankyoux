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
