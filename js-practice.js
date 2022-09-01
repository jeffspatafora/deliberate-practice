// // // # 1. Write a function that takes in a number and returns the number times two. Then run the function and print the result.

// // function timesTwo(number) {
// //   console.log(number * 2);
// // }

// // timesTwo(2);

// // // # 2. Write a function that takes in a string and returns the string with all capital letters. Then run the function and print the result.

// // function allCaps(string) {
// //   console.log(string.toUpperCase());
// // }

// // allCaps('helloworld');

// // // # 3. Write a function that takes in two numbers and returns the first number subtracted by the second. Then run the function and print the result.

// // function subtract(number1, number2) {
// //   console.log(number1 - number2);
// // }

// // subtract(6, 3);
// // subtract(10, 20);
// // subtract(45, 32);
// // subtract(-3, 9);

// // // # 4. Write a function that takes in a number and returns the number times itself. Then run the function and print the result.

// // function timesItself(number3) {
// //   return number3 * number3;
// // }

// // console.log(timesItself(3));
// // console.log(timesItself(10));
// // console.log(timesItself(9));

// // // # 5. Write a function that takes in a string and returns the first letter of the string. Then run the function and print the result.

// // function firstLetter(string) {
// //   return string[0];
// // }

// // console.log(firstLetter('hello'));
// // console.log(firstLetter('world'));

// // // # 6. Write a function that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the function and print the result.

// // function combinedStrings(string1, string2, string3) {
// //   return `${string1} ${string2} ${string3}`;
// // }

// // console.log('hello', 'earth', 'world');

// // // # 7. Write a function that takes in a number and returns the number as a string. Then run the function and print the result.

// // function numberToString(number) {
// //   // return number.toString();
// //   return String(number);
// // }

// // console.log(numberToString(2378));

// // function stringToNumber(string) {
// //   return parseInt(string);
// // }

// // console.log(stringToNumber('1234'));
// // console.log(stringToNumber('hello'));

// // // # 8. Write a function that takes in a string and returns the string repeated 5 times.Then run the function and print the result.

// // function repeatedFiveTimes(string) {
// //   return console.log(string + " " + string + " " + string + " " + string + " " + string);
// // }

// // repeatedFiveTimes('hello world');

// // // # 9. Write a function that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the function and print the result.

// // function average(numberA, numberB, numberC) {
// //   return (numberA + numberB + numberC) / 3;
// // }

// // console.log(average(20, 55, 145));

// // // # 10. Write a function that takes in a number and returns the number times 10 plus 30. Then run the function and print the result.

// // function number10(numberD) {
// //   return numberD * 10 - 30;
// // }

// // console.log(number10(6));
// // console.log(number10(100));
// // console.log(number10(48));
// // console.log(number10(-5));






// #  1. Start with an array of numbers and create a new array with each number times 3.
// #     For example, [1, 2, 3] becomes [3, 6, 9].

function timesThree(numbersArray) {
  const timesThreeArray = [];
  let i = 0;
  while (i < numbersArray.length) {
    timesThreeArray.push(numbersArray[i] * 3);
    i++;
  }
  console.log(timesThreeArray);
}

timesThree([1, 2, 3]);
timesThree([99, 100, -20]);
timesThree([15, 24, 32]);

function timesThreeEach(numbersArray1) {
  const timesThreeArray1 = [];
  numbersArray1.forEach(function (number) {
    timesThreeArray1.push(number * 3);
  });
  console.log(timesThreeArray1);
}

timesThreeEach([1, 2, 3]);
timesThreeEach([99, 100, -20]);
timesThreeEach([15, 24, 32]);

// #  2. Start with an array of strings and create a new array with each string upcased.
// #     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

function stringsUpperCase(strings) {
  const stringsUpperCased = strings.map(function (string) {
    return string.toUpperCase();
  });
  console.log(stringsUpperCased);
}

stringsUpperCase(["hello", "goodbye"]);



// #  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

function getNames(peopleArray) {
  const justNames = peopleArray.map(function (person) {
    return person.name;
  });
  console.log(justNames);
}

getNames([{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }]);


// #  4. Start with an array of numbers and create a new array with each number plus 7.
// #     For example, [1, 2, 3] becomes [8, 9, 10].

function plusSeven(numbers2) {
  const numbersPlusSeven = numbers2.map(function (number) {
    return number + 7;
  });
  console.log(numbersPlusSeven);
}

plusSeven([1, 2, 3]);
plusSeven([0, 20, 45]);
plusSeven([-10, 77, 100]);

// #  5. Start with an array of strings and create a new array with each string's length.
// #     For example, ["hello", "goodbye"] becomes [5, 7].

function stringLength(strings) {
  const justStringLength = strings.map(function (string) {
    return string.length;
  });
  console.log(justStringLength)
}

stringLength(["hello", "goodbye"]);
stringLength(["hellojdjdjjejdj", "goodbye1010101"]);
stringLength(["hellorrrrrrr", "goodbyeoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqoqqooqoq"]);

// #  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

function getAges(people) {
  const justAges = people.map(function (person) {
    return person.age;
  });
  console.log(justAges);
}

getAges([{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }]);


// #  7. Start with an array of numbers and create a new array with each number divided by 2.
// #     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

// #  8. Start with an array of strings and create a new array with each string's first letter only.
// #     For example, ["hello", "goodbye"] becomes ["h", "g"].

// # 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

// # 10. Start with an array of numbers and create a new array with each number converted into a string.
// #     For example, [1, 2, 3] becomes ["1", "2", "3"].
