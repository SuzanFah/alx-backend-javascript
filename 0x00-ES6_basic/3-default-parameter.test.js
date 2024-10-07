import getSumOfHoods from './3-default-parameter.js';

test('returns correct sum with default values', () => {
  expect(getSumOfHoods(34)).toBe(142); // 34 + 89 + 19
});

test('returns correct sum when passing second parameter', () => {
  expect(getSumOfHoods(34, 3)).toBe(56); // 34 + 3 + 19
});

test('returns correct sum when passing both parameters', () => {
  expect(getSumOfHoods(34, 3, 4)).toBe(41); // 34 + 3 + 4
});
