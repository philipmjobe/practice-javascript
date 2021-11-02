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
