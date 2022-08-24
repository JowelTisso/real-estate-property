let timerId;
export function debounce(func, delay = 500) {
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
