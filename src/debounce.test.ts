// src/debounce.test.ts

import { debounce } from './debounce';

jest.useFakeTimers();

describe('debounce', () => {

  it('should delay the function call', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 2000);

    debouncedFunc();
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1500);
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1500);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should reset the delay if called again within the wait period', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 2000);

    debouncedFunc();
    jest.advanceTimersByTime(1500);
    debouncedFunc();
    jest.advanceTimersByTime(1500);
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1500);
    expect(func).toHaveBeenCalledTimes(1);
  });  
});