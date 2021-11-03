// Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
// function printNumbersDivisibleByThree() {
//   var index = 1;
//   while (index <= 1000) {
//     if (index % 3 === 0) {
//       console.log(index);
//     }
//     index += 1;
//   }
// }
// printNumbersDivisibleByThree();

// Write a method that accepts an array of strings and prints out every other string.
// function printEveryOtherItem(strings) {
//   var index = 0;
//   strings.forEach(function (string) {
//     if (index % 2 === 0) {
//       console.log(string);
//     }
//     index += 1;
//   });
// }
// printEveryOtherItem(["a", "b", "c", "d", "e"]);

// Write a method that accepts an array of numbers and returns the sum.
// function computeSum(numbers) {
//   var sum = 0;
//   numbers.forEach(function (number) {
//     sum += number;
//   });
//   return sum;
// }
// console.log(computeSum([2, 4, 5]));

// Start with the hash: city_populations = {chi: 2700000}
// Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
// var cityPopulations = { chi: 2700000 };
// cityPopulations["nyc"] = 8400000;
// cityPopulations.sf = 800000; // same as cityPopulations["sf"]
// console.log(cityPopulations);

// Write a method that prints out every number from 1 to 100.
// function printNums() {
//   let index = 0;
//   while (index < 101) {
//     console.log(index);
//     index += 1;
//   }
// }
// printNums();
// Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).
// function oddsToOneHundered() {
//   var i = 0;
//   while (i < 100) {
//     i += 1;
//     if (i % 2 !== 0) {
//       console.log(i);
//     }
//   }
// }
// oddsToOneHundered();

// Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.
// let array = [55, 12, 99, 55, 55];

// function countFiftyFives(array) {
//   var i = 0;
//   var count = 0;
//   while (i < array.length) {
//     if (array[i] === 55) {
//       count += 1;
//     }
//     i += 1;
//   }
//   console.log(count);
// }
// countFiftyFives(array);
// Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string.
// For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].
// function awesomeSauce(array) {
//   let i = 0;
//   const newArray = [];
//   while (i < array.length) {
//     if (i === array.length - 1) {
//       newArray.push(array[i]);
//     } else {
//       newArray.push(array[i]);
//       newArray.push("awesomesauce");
//     }
//     i += 1;
//   }
//   console.log(newArray);
// }
// awesomeSauce(["a", "b", "c", "d"]);

// Start with the hash: item_amounts = {chair: 5, table: 2}
// Someone just bought two chairs. Change the hash such that the chair amount is 3.
// The final result should be: {chair: 3, table: 2}
// function furnitureHash() {
//   let hash = {
//     chair: 5,
//     table: 2,
//   };
//   hash["chair"] = 3;
//   console.log(hash);
// }
// furnitureHash();
// Start with the hash: item_amounts = {chair: 5, table: 2}
// You received 7 desks to sell. Change the hash to include desks.
// The final result should be: {chair: 5, table: 2, desk: 7}
// function addDesks() {
//   let hash = {
//     chair: 5,
//     table: 2,
//   };
//   hash["desk"] = 7;
//   console.log(hash);
// }
// addDesks();
// Write a method that accepts a number and returns its factorial.
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array.
// For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

// Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

// function selectEvenNumbers(array) {
//   const newArray = [];
//   let i = 0;
//   while (i < array.length + 1) {
//     newArray.push(array[i]);
//     i += 2;
//   }
//   console.log(newArray);
// }
// selectEvenNumbers(["a", "b", "c", "d", "e", "f"]);

// Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

// let num = [5, 4, 8, 1, 2];
// function returnBiggest(num) {
//   var i = 0;
//   var ref = num[0];
//   while (i < num.length) {
//     if (num[i] > ref) {
//       ref = num[i];
//     }
//     i += 1;
//   }
//   console.log(ref);
// }
// returnBiggest(num);

// Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// var num = 5;
// function factorial(num) {
//   var i = num;
//   var result = 1;
//   while (i > 0) {
//     result = result * i;
//     i -= 1;
//   }
//   console.log(result);
// }
// factorial(num);

// Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built into Ruby.

// function returnDescending(num) {
//   let newArray = [];
//   for (let i = num.length - 1; i >=)
// }

//1) Write a function that takes in an array of numbers and returns its sum.

// function returnSum(numbers) {
//   var result = 0;
//   var i = 0;
//   while (i < numbers.length) {
//     result += numbers[i];
//     i += 1;
//   }
//   console.log(result);
// }
// returnSum([1, 2, 3]);

//2) Write a function that takes in an array of strings and returns the smallest string.

//3) Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.

// function reversedNumbers(numbers) {
//   var result = [];
//   var i = numbers.length - 1;
//   while (i >= 0) {
//     result.push(numbers[i]);
//     i -= 1;
//   }
//   console.log(result);
// }
// reversedNumbers([1, 2, 3]);

//4) Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.
let array = ["apple", "banana", "apex"];
function beginsWithA(array) {
  var i = 0;
  var count = 0;
  while (i < array.length) {
    if (array[i].chars === "a") {
      count += 1;
    }
    i += 1;
  }
  console.log(array);
}
beginsWithA(array);
//5) Write a function that takes in an array of strings and joins them together to make a single string separated by commas.

// function withCommas(strings) {
//   var result = "";
//   var i = 0;
//   while (i < strings.length) {
//     result += strings[i] + ",";
//     i += 1;
//   }
//   console.log(result);
// }
// withCommas(["apple", "orange", "grapes"]);

//6) Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other).

//7) Write a function that takes in an array of numbers and returns the two smallest numbers.

// function smallestNumbers(numbers) {
//   var si = 0;
//   var smallest = numbers[si];
//   var i = 0;
//   while (i < numbers.length) {
//     if (numbers[i] < smallest) {
//       smallest = numbers[i];
//       si = i;
//     }
//     i += 1;
//   }
//   var secondSmallest = numbers[si];
//   secondSmallest = numbers[si - 1];

//   while (i < numbers.length) {
//     if (numbers[i] < secondSmallest && i !== si) {
//       secondSmallest = numbers[i];
//     }
//     i += 1;
//   }
//   console.log(smallest, secondSmallest);
// }
// smallestNumbers([1, 10, 9, 3, 23, 12]);

//8) Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.

//9) Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.

// function bigNumbers(numbers) {
//   var results = true;
//   var i = 0;
//   while (i < numbers.length) {
//     if (numbers[i] <= 10) {
//       results = false;
//     }
//     i += 1;
//   }
//   console.log(results);
// }
// bigNumbers([11, 23, 32]);

//10) Write a function that takes in an array of words and returns the number of times the letter “a” appeared in total.
