// # 1. Write a function that takes in a number and returns the number times two. Then run the function and print the result.

function timesTwo(number) {
  console.log(number * 2);
}

timesTwo(2);

// # 2. Write a function that takes in a string and returns the string with all capital letters. Then run the function and print the result.

function allCaps(string) {
  console.log(string.toUpperCase());
}

allCaps('helloworld');

// # 3. Write a function that takes in two numbers and returns the first number subtracted by the second. Then run the function and print the result.

function subtract(number1, number2) {
  console.log(number1 - number2);
}

subtract(6, 3);
subtract(10, 20);
subtract(45, 32);
subtract(-3, 9);

// # 4. Write a function that takes in a number and returns the number times itself. Then run the function and print the result.

function timesItself(number3) {
  return number3 * number3;
}

console.log(timesItself(3));
console.log(timesItself(10));
console.log(timesItself(9));

// # 5. Write a function that takes in a string and returns the first letter of the string. Then run the function and print the result.

function firstLetter(string) {
  return string[0];
}

console.log(firstLetter('hello'));
console.log(firstLetter('world'));

// # 6. Write a function that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the function and print the result.

function combinedStrings(string1, string2, string3) {
  return `${string1} ${string2} ${string3}`;
}

console.log('hello', 'earth', 'world');

// # 7. Write a function that takes in a number and returns the number as a string. Then run the function and print the result.

function numberToString(number) {
  // return number.toString();
  return String(number);
}

console.log(numberToString(2378));

function stringToNumber(string) {
  return parseInt(string);
}

console.log(stringToNumber('1234'));
console.log(stringToNumber('hello'));

// # 8. Write a function that takes in a string and returns the string repeated 5 times.Then run the function and print the result.

function repeatedFiveTimes(string) {
  return console.log(string + " " + string + " " + string + " " + string + " " + string);
}

repeatedFiveTimes('hello world');

// # 9. Write a function that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the function and print the result.

function average(numberA, numberB, numberC) {
  return (numberA + numberB + numberC) / 3;
}

console.log(average(20, 55, 145));

// # 10. Write a function that takes in a number and returns the number times 10 plus 30. Then run the function and print the result.

function number10(numberD) {
  return numberD * 10 - 30;
}

console.log(number10(6));
console.log(number10(100));
console.log(number10(48));
console.log(number10(-5));
