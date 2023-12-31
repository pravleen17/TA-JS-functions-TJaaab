/*
1. Create a function named `sayHello` that alerts a message `Hello World!`.
*/
function sayHello() {
    alert(`Hello World!`);
}

/*
2. Create a function named `fullName` with the following steps:

  - Prompts a message saying `Enter your first name` and store the value into variable named `firstName`
  - Prompts a message saying `Enter your last name` and store the value into variable named `lastName`
  - Concat the value of fistName and lastName and store it in another variable named `fullName`.
  - Alert `fullName`
*/
function fullName() {
    let firstName = prompt(`Enter Your First Name`);
    let lastName = prompt(`Enter Your Last Name`);
    let full = `${firstName} ${lastName}`;
    alert(full);
}

/*
3. Create a function named `addTwoNumbers` with the following steps:

  - Prompts a message saying `Enter the first number` and store the value into variable named `firstNum`
  - Prompts a message saying `Enter the second` and store the value into variable named `secondNum`
  - Add the value of firstNum and secondNum and store it in another variable named `sum`.
  - Alert `sum`
*/
function addTwoNumbers() {
    let firstNum = +prompt(`Enter First number`);
    let secondNum = +prompt(`Enter Second number`);
    let sum = `${firstNum} ${secondNum}`;
    alert(sum);
}

/*
4. Create a function named `getTable` with the following steps:

  - Prompts a message saying `Enter a number` and store the value into variable named `num`
  - Using `console.log` logs the Multiplication Table of the number entered by the user.
  - Example: Number is 9

  9 * 1 = 9
  9 * 2 = 18
  9 * 3 = 27
  9 * 4 = 36
  9 * 5 = 45
  9 * 6 = 54
  9 * 7 = 63
  9 * 8 = 72
  9 * 9 = 81
  9 * 10 = 90
*/
function getTable() {
    let num = +prompt(`Enter a number`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
}

/*
5. Create a function named `isLeapYear` with the following steps:

  - Prompts a message saying `Enter a year` and store the value into variable named`year`
  - Alert `[year] is a leap year` otherwise `[year] is not a leap year`
*/
function isleapYear()  {
  let year = +prompt(`Enter the year`);
  if (year % 400 === 0) {
    alert(`${year} is a leap year`);
  } else if (year % 100 === 0) {
    alert(`${year} is not a leap year`);
  } else if (year % 4 === 0) {
    alert(`${year} is a leap year`);
  } else {
    alert(`${year} is not a leap year`);
  }
}

/*
6. Create a function named `getFactorial` with the following steps:

  - Prompts a message saying `Enter a number` and store the value into variable named`number`
  - Alert `The factorial of [number] is [factorial]`

*/
function getFactorial() {
  let num = +prompt(`Enter a number`);
  let final = 1;
  for (let i = num; i >= 1; i--) {
    final *= i;
  }
  alert(`The factorial of ${num} is ${final}`);
}
