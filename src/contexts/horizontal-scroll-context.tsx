import {useRef} from 'react';

// Module-level ref for gesture handling across navigation boundaries
export const isHorizontalScrollingRef = {current: false};

export const horizontalScrollCallbacks = new Set<(value: boolean) => void>();

export function registerHorizontalScrollCallback(
  callback: (value: boolean) => void,
) {
  horizontalScrollCallbacks.add(callback);
  return () => horizontalScrollCallbacks.delete(callback);
}

export function setIsHorizontalScrolling(value: boolean) {
  isHorizontalScrollingRef.current = value;
  horizontalScrollCallbacks.forEach(cb => cb(value));
}

export function useHorizontalScroll() {
  // This is a simplified hook for compatibility
  // For gesture handling, use isHorizontalScrollingRef directly
  return {
    isHorizontalScrolling: isHorizontalScrollingRef.current,
    setIsHorizontalScrolling,
  };
}
