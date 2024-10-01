const taskBlock = require('./0-main.js');  // Adjust the import path based on the actual location

test('taskBlock returns correct values', () => {
  expect(taskBlock(true)).toEqual([true, false]);
  expect(taskBlock(false)).toEqual([false, true]);
});
