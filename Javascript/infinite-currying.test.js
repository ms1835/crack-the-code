import infiniteCurry from './infinite-currying.js';

test('infiniteCurry: basic summing chain', () => {
  expect(infiniteCurry(1)(2)(3)()).toBe(6);
  expect(infiniteCurry(5)(-2)(4)()).toBe(7);
});

test('infiniteCurry: single value', () => {
  expect(infiniteCurry(10)()).toBe(10);
});

test('infiniteCurry: handles 0 properly', () => {
  expect(infiniteCurry(0)(0)(0)()).toBe(0);
});

test('infiniteCurry: works with multiple chained calls', () => {
  const chain = infiniteCurry(1)(2)(3)(4)(5);
  expect(chain()).toBe(15);
});
