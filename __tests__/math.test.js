const { add, subtract } = require('../src/math');

describe('Math utilities', () => {
  describe('add function', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    test('should add mixed numbers', () => {
      expect(add(5, -3)).toBe(2);
    });
  });

  describe('subtract function', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    test('should subtract negative numbers', () => {
      expect(subtract(-2, -3)).toBe(1);
    });

    test('should subtract mixed numbers', () => {
      expect(subtract(5, -3)).toBe(8);
    });
  });
});
