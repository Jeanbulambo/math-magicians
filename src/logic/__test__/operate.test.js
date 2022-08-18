import operate from '../ operate';

// Operate testing.
test('Testing functions', () => {
  expect(operate(1, 2, '+')).toBe('3');
});
