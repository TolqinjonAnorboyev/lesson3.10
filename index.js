// // 1- misol

// function checkArray(arr) {
//   if (arr.length === 0) {
//     console.log("Empty array");
//   } else {
//     console.log("Not empty");
//   }
// }

//   checkArray([]);      // Output: "Empty array"
//   checkArray([1, 2, 3]);  // Output: "Not empty" 

//  // 2- misol

// function checkArray(arr) {
//   const allNegative = arr.every(num => num < 0);

//   if (allNegative) {
//     console.log("All negative");
//   } else {
//     console.log("At least one non-negative");
//   }
// }

// checkArray([-1, -5, -3]);       // Output: "All negative"
// checkArray([-2, 0, -4]);        // Output: "At least one non-negative"

// // 3- misol

// function checkArray(arr) {
//   const allPositive = arr.every(num => num > 0);

//   if (allPositive) {
//     console.log("All positive");
//   } else {
//     console.log("At least one non-positive");
//   }
// }

// checkArray([1, 5, 9])       // Output: "All positive"
// //checkArray([1, 0, 7])       // Output: "At least one non-positive"

// // 5- misol

// function checkArray(arr) {
//   const min = Math.min(...arr)

//   if (min < 0) {
//       console.log("There is a negative");
//   } else {
//     console.log("No negative"); 
//   }
// }

// checkArray([2, -1, 0, 10])       // Output: "There is a negative"
// //checkArray([2, 1, 0, 10])        // Output: "No negative"

// // 6- misol

// function checkArray(arr) {
//   if (arr.length < 5) {
//     console.log("Fev elements");
//   } else {
//     console.log("Many elements");
//   }
// }

// checkArray([1, 2, 3,])
// checkArray([1, 2, 3, 4, 5])

// // 7- misol

// function checkDublicates(arr) {
//   const uniqueSet = new Set(arr);
//   if(uniqueSet.size < arr.length){
//     console.log("Dublicates found");
//   } else {
//     console.log("Unique elements");
//   }
// }

// checkDublicates([1, 2, 3, 2])
// checkDublicates([7, 8, 9])
// // 8- misol

// function checkSum(arr) {
//   const sum = arr.reduce((total, num) => total + num, 0);

//   if (sum < 50) {
//     console.log("Sum less than 50");
//   } else {
//     console.log("Sum 50 or more");
//   }
// }

// checkSum([10, 20, 15]);
// checkSum([25, 25, 5]);

// // 9- misol

// function compareEvenOddCount(arr) {
//   let evenCount = 0;
//   let oddCount = 0;

//   for (let num of arr) {
//     if (num % 2 === 0) {
//       evenCount++;
//     } else {
//       oddCount++;
//     }
//   }

//   if (evenCount > oddCount) {
//     console.log("More even");
//   } else {
//     console.log("Less or equal even");
//   }
// }

// compareEvenOddCount([2, 4, 5, 6]);       // Output: "More even"
// compareEvenOddCount([1, 2, 3, 5]);       // Output: "Less or equal even"

// // 10- misol

// function checkArray(arr) {
//   if (arr.includes(0)) {
//     console.log("Zero found");
//   } else {
//     console.log("No zero");
//   }
// }

//  //checkArray([0, 1, 2]);      // Output: "Zero found"
//  checkArray([1, 2, 3]);      // Output: "No zero" 
 
// // 11- misol

// function checkArray(arr) {
//   if (arr.length === 1) {
//     console.log("Single element");
//   } else {
//     console.log("Multiple element");
//   }
// }

//  checkArray([5]);      
//  //checkArray([5, 6]); 
 
//  // 12- misol

//  function checkFunc(arr) {
//  if(arr[0] > arr[arr.length - 1]) {
//   console.log("First bigger");
//  } else {
//   console.log("Not bigger");
//  }
//  }

//  checkFunc([10, 3, 2, 1]);
//  checkFunc([4,6]);

// // 13- misol

// function checkArray(arr) {
//   if (arr.includes(10)) {
//     console.log("Contains 10");
//   } else {
//     console.log("No 10");
//   }
// }

//  //checkArray([9, 10, 11]);      // Output: "Contains 10"
//  checkArray([1, 2, 3]);      // Output: "No 10"
 
// // 14- misol

// function checkFunc(arr) {
//   let sum = 0;
//   arr.forEach(item => {
//     sum+= item;
//   });
//   const avg = sum/arr.length;
//   console.log(sum);

//   if(avg >= 5) {
//     console.log("avg 5 or more");
//   } else {
//     console.log("avg less than 5");
//   }

// }
// checkFunc([5, 5, 5])
// checkFunc([2, 4, 5])
 
// // 15- misol

// function checkMax(arr) {
//   const max = Math.max(...arr); 

//   if (max % 2 === 0) {
//     console.log(`${max} is even`);
//   } else {
//     console.log(`${max} is odd`);
//   }
// }

// checkMax([3, 10, 4]);        // Output: "10 is even"
// checkMax([2, 5, 7, 11]);     // Output: "11 is odd"

// // 16- misol

// function checkArray(arr) {
//   const min = Math.min(...arr)

//   if (min > 5) {
//       console.log("Min > 5");
//   } else {
//     console.log("Min <= 5"); 
//   }
// }
// checkArray([6, 7, 10])
// checkArray([5, 6, 7])

// // 17- misol

// function checkMultipleOf3(arr) {
//   if (arr.some(num => num % 3 === 0)) {
//     console.log("Multiple of 3 found");
//   } else {
//     console.log("No multiple of 3");
//   }
// }

// checkMultipleOf3([2, 4, 9]);       
// checkMultipleOf3([1, 2, 4, 5]); 

// // 18- misol

// function checkArray(arr) {
// if (arr.every(num => num % 2 !== 0)) {
//     console.log("All odd");
//   } else {
//     console.log("Not all odd");
//   }
// }

// checkArray([1, 3, 5, 7])
// checkArray([1, 2, 5])

// // 19- misol

// function checkAllSame(arr) {
//   if (arr.every(num => num === arr[0])) {
//     console.log("All are same");
//   } else {
//     console.log("Not all same");
//   }
// }

// checkAllSame([7, 7, 7])
// checkAllSame([7, 7, 8])

// // 20- misol

// function checkConsecutiveAscending(arr) {
//   if (arr.length < 3) {
//     console.log("No consecutive ascending");
//     return;
//   }

//   let isConsecutive = true;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== arr[i - 1] + 1) {
//       isConsecutive = false;
//       break;
//     }
//   }

//   if (isConsecutive) {
//     console.log("Consecutive ascending");
//   } else {
//     console.log("No consecutive ascending");
//   }
// }

// checkConsecutiveAscending([3, 4, 5]);     // Output: "Consecutive ascending"
// checkConsecutiveAscending([1, 2, 4]);        // Output: "No consecutive ascending"
