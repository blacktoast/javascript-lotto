function generateRandomNumber() {
  let numbers = new Set();
  while (numbers.size < 8) {
    numbers.add(Math.floor(Math.random() * (46 - 1) + 1));
  }
  return [...numbers].sort((a, b) => a - b);
}

export function getRandomNumber() {
  return generateRandomNumber();
}
