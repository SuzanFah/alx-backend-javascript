// 0-main.js
function taskBlock(isTrue) {
  if (isTrue) {
    const task = [true, false];
    return task;
  }
  return [false, true];
}

module.exports = taskBlock;

