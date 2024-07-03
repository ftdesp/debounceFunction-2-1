import { debounce } from '../src/debounce';

jest.useFakeTimers();

describe('debounce', () => {
  it('should delay the function call', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 2000);

    debouncedFunc();
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1500);
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500);
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

    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function with the correct arguments', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 2000);

    debouncedFunc('test', 123);
    jest.advanceTimersByTime(2000);

    expect(func).toHaveBeenCalledWith('test', 123);
  });

  it('should only call the function once for multiple rapid calls', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 2000);

    for (let i = 0; i < 5; i++) {
      debouncedFunc();
    }

    jest.advanceTimersByTime(2000);
    expect(func).toHaveBeenCalledTimes(1);
  });
});