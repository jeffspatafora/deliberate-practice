// # 1. Write a while loop to print the numbers 1 through 10.

// let number = 1;
// while (number <= 10) {
//   console.log(number);
//   number++;
// }

// # 2. Write a while loop that prints the word "hello" 5 times.

// let word = "hello";
// let i = 0;
// while (i < 5) {
//   console.log(word);
//   i++;
// }

// # 3. Write a while loop that asks the user to enter a word and will run forever until the user enters the word "stop".

// let word = window.prompt("enter word:");
// while (word.toLowerCase() !== "stop") {
//   word = window.prompt("enter another word. Type 'stop' to end:");
// }

// while (true) {
//   let word = window.prompt("enter word:");
//   if (word.toLowerCase() === "stop") {
//     break;
//   }
// }

// # 4. Write a while loop that prints the numbers 0 through 100, increasing by 5 each time.

// let number = 0;
// while (number <= 100) {
//   console.log(number);
//   number += 5;
// }

// # 5. Write a while loop that prints the number 9000 ten times.

// let number = 9000;
// let count = 0;
// while (count < 10) {
//   console.log(number);
//   count++;
// }

// # 6. Write a while loop that asks the user to enter a number and will run forever until the user enters a number greater than 10.

// let number = parseInt(window.prompt("enter a number:"));
// while (number <= 10) {
//   number = parseInt(window.prompt("enter another numbre:"));
// }

// while (true) {
//   let number = parseInt(window.prompt("enter a number:"));
//   if (number > 10) {
//     break;
//   }
// }

// # 7. Write a while loop that prints the numbers 50 to 70.

// let number = 50;
// while (number <= 70) {
//   console.log(number);
//   number++;
// }

// # 8. Write a while loop that prints the phrase "Around the world" 144 times.

// let count = 0;
// while (count <= 144) {
//   console.log("Around the world");
//   count++;
// }

// # 9. Write a while loop that asks the user to enter a word and will run forever until the user enters a word with more than 5 letters.

// let word = window.prompt("enter a word:");
// while (word.length <= 5) {
//   word = window.prompt("enter another word:");
// }

// while (true) {
//   let word = window.prompt("enter a word:");
//   if (word.length > 5) {
//     break;
//   }
// }

// # 10. Write a while loop that prints the even numbers from 2 to 40.

let number = 0;
while (number < 40) {
  number += 2;
  console.log(number);
}
