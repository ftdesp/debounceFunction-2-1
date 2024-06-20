// src/debounce.ts

type DebounceFunction = (...args: any[]) => void;

export function debounce(func: DebounceFunction, wait: number): DebounceFunction {
  let timeout: NodeJS.Timeout | null;

  return function(...args: any[]) {    
    console.log(timeout);
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func(...args);
    }, wait);

  };
}