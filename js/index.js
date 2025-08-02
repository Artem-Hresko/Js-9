//  Task 1

function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

// Task 2

function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(" ");
  return words.length * pricePerWord;
}

// Task 3

function findLongestWord(string) {
  const words = string.split(" ");
  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

// Task 4

function formatString(string) {
  if (string.length <= 40) {
    return string;
  } else {
    return string.slice(0, 40) + "...";
  }
}

// Task 5

function checkForSpam(message) {
  const lowerCaseMessage = message.toLowerCase();
  return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
}

// Task 6

let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Введіть число");

  if (input === null) {
    break;
  }

  const number = Number(input);

  if (isNaN(number)) {
    alert("Було введено не число, попробуйте ще раз");
    continue;
  }

  numbers.push(number);
}

if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }
  console.log(`Загальна сума чисел дорівнює ${total}`);
}
