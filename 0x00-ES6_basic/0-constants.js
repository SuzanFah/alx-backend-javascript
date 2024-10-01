export function taskFirst() {
  const task = 'I prefer const when I can.'; // Use const for task
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let'; // Use let for combination
  combination += getLast();

  return combination;
}
