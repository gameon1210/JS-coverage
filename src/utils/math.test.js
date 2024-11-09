import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './math';

describe('Math Utils', () => {
  describe('add', () => {
    it('adds two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('adds a positive and negative number', () => {
      expect(add(2, -3)).toBe(-1);
    });
  });

  describe('subtract', () => {
    it('subtracts two positive numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it('subtracts a negative number', () => {
      expect(subtract(5, -3)).toBe(8);
    });
  });

  describe('multiply', () => {
    it('multiplies two positive numbers', () => {
      expect(multiply(2, 3)).toBe(6);
    });

    it('multiplies by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    it('divides two positive numbers', () => {
      expect(divide(6, 2)).toBe(3);
    });

    it('throws error when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrow('Division by zero');
    });
  });
});