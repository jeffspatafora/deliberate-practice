// # 1. Use a variable to store a number, then write a condition that prints 0 if the number is equal to 10, and prints -1 otherwise.

// let number1 = 10;

// if (number1 === 10) {
//   console.log(0);
// } else {
//   console.log(-1);
// }

// # 2. Use a variable to store a number, then write a condition that prints -1 if the number is less than 10, prints 1 if the number is greater than 10, and prints 0 if the number is equal to 10.

// let number2 = 10;

// if (number2 < 10) {
//   console.log(-1);
// } else if (number2 > 10) {
//   console.log(1);
// } else if (number2 === 10) {
//   console.log(0);
// }

// # 3. Use variables to store two numbers, then write a condition that prints 1 if the numbers are both less than 10, and prints 0 otherwise.

// # 4. Use a variable to store a number, then write a condition that prints 1 if the number is over 9000, and prints -1 otherwise.

// # 5. Use a variable to store a number, then write a condition that prints 9 if the number is less than 10, prints 19 if the number is less than 20, prints 29 if the number is less than 30, and prints -1 otherwise (only one print statement should occur).

// # 6. Use variables to store two numbers, then write a condition that prints 100 if either number is greater than 10, and prints -100 otherwise.

// # 7. Use a variable to store a number, then write a condition that prints 1776 if the number is less than 0, and prints 1979 otherwise.

// # 8. Use a variable to store a number, then write a condition that prints 100 if the number equals 100, prints 99 if the number is equal to 99, and prints 0 otherwise.

// # 9. Use variables to store two numbers, then write a condition that prints 1 if the first number is less than zero and the second number is greater than 0, and prints 0 otherwise.

// # 10. Use a variable to store a number, then write a condition that prints 5 if the number is greater than 80, prints 4 if the number is greater than 60, prints 3 if the number is greater than 40, prints 2 if the number is greater than 20, and prints 1 otherwise (only one print statement should occur).

// const number3 = 21;

// if (number3 > 80) {
//   console.log(5);
// } else if (number3 > 60) {
//   console.log(4);
// } else if (number3 > 40) {
//   console.log(3);
// } else if (number3 > 20) {
//   console.log(2);
// } else {
//   console.log(1);
// }


// # 1. Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

// const firstName = "Jeff";
// const lastName = "Spatafora";

// console.log(firstName + " " + lastName);

// # 2. Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation (the #{} operator).

// const firstName1 = "Jeff";
// const lastName1 = "Spatafora";

// console.log(`${firstName} ${lastName1}`);

// # 3. Write a program that asks the user to input a word. If the word is "marco", print "polo".


// let word = window.prompt('please enter a word: ');
// if (word.toLowerCase() === 'marco') {
//   console.log('polo');
// }

// # 4. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).

// const color1 = 'red';
// const color2 = 'blue';
// const color3 = 'yellow';

// console.log(color1 + ' ' + color2 + ' ' + color3);


// # 5. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the #{} operator).

// const color4 = 'black';
// const color5 = 'white';
// const color6 = 'grey';

// console.log(`${color4} ${color5} ${color6}`);

// # 6. Write a program that asks the user to enter a name. If the name is not "Santa", print "You're not Santa."

// let personName = window.prompt('enter your name: ');
// if (personName.toLowerCase() !== 'santa') {
//   console.log('you are not santa');
// } else if (personName.toLowerCase() === 'santa') {
//   console.log('merry christmas, santa!');
// }


// # 7. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string concatenation (the + operator).

// # 8. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string interpolation (the #{} operator).

// # 9. Write a program that asks the user to enter a password. If the password is "Joshua", the program responds "Shall we play a game?". For any other password, the program responds "Access denied"

// # 10. Write a program that uses variables to store the names of three cities, then prints out a sentence using that information with string concatenation (the + operator).


// # 1. Write a program that asks the user to enter a word, then prints that word with all capital letters.

let word = window.prompt('enter a word: ');
console.log(word.toUpperCase());

// # 2. Write a program that asks the user to enter a number, then prints "That's a big number" if the number is greater than 100.


let number = window.prompt('enter a number: ');
if (parseInt(number) > 100) {
  console.log("that's a big number!");
}

// # 3. Write a program that asks the user to enter two numbers, then prints the numbers added together.

let number1 = window.prompt('enter a number: ');
let number2 = window.prompt('enter another number: ');
let sum = parseInt(number1) + parseInt(number2);
console.log(`the sum of your numbers is ${sum}`);

// # 4. Write a program that asks the user to enter a word, then prints that word in reverse order.

let word1 = window.prompt('enter a word: ');
console.log(word.reverse());

// # 5. Write a program that asks the user to enter a number, then prints the number times 10.

let word2 = window.prompt('enter a word: ');



// # 6. Write a program that asks the user to enter two words, then prints both words on the same line in all capital letters.

// # 7. Write a program that asks the user to enter a word, then prints the number of letters in the word.

// # 8. Write a program that asks the user to enter a number, then prints "That's a negative number" if the number is less than 0.

// # 9. Write a program that asks the user to enter two numbers, then prints the two numbers multiplied together.

// # 10. Write a program that asks the user to enter a word, then prints "That's a long word" if the word has more than 5 letters.

