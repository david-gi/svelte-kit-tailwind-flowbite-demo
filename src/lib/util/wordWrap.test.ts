import { describe, it, expect } from 'vitest';
import { wordWrap } from './wordWrap';

describe('wordWrap', () => {
    it('is a no-op on short strings', () => {
        expect(wordWrap('Hello world', 80)).toBe('Hello world');
    });
    it('wraps strings that are too long', () => {
        expect(wordWrap('Hello world', 8)).toBe('Hello\nworld');
        expect(wordWrap('Lorem ipsum dolor sit amet', 15)).toBe('Lorem ipsum\ndolor sit amet');
    });
});
