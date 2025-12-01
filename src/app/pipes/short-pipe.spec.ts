import { ShortPipe } from './short-pipe';

describe('ShortPipe', () => {
  let pipe: ShortPipe;

  beforeEach(() => {
    pipe = new ShortPipe();
  });

  it('should return empty string if value is null or undefined', () => {
    expect(pipe.transform(null as any)).toBe('');
    expect(pipe.transform(undefined as any)).toBe('');
  });

  it('should return the same string if length is less than limit', () => {
    const text = 'Short text';
    expect(pipe.transform(text, 20)).toBe('text');
  });

  it('should truncate the string and add "..." if length exceeds limit', () => {
    const text = 'This is a very long text that should be truncated.';
    expect(pipe.transform(text, 14)).toBe('This is a very...');
  });

  it('should use default limit 100 if not provided', () => {
    const result = pipe.transform('a'.repeat(150));
    expect(result.length).toBe(103); // 100 символов + "..."
    expect(result.endsWith('...')).toBeTrue();
  });
});
