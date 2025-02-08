//1//

const nums = [12,5,20,8,15,30]

const numbersMorethanTen = nums.filter(num => num > 10)
console.log(numbersMorethanTen)

//2//
const words = ["hello", "world", "apple", "orange", "banana"];

const wordsContainingZero = words.filter(word => word.includes("o"))
console.log(wordsContainingZero)

//3//
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbers = numbers.filter(num => isPrime(num));

console.log(primeNumbers);


//4//

const threeMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const notThreeMultiples = threeMultiples.filter(num => num % 3 !== 0 )
console.log(notThreeMultiples)

//5//
const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbsNotDivisibleByTwoAndThree = numbs.filter(num => num % 2 !== 0 && num %3 !== 0)

console.log(numbsNotDivisibleByTwoAndThree)

//6//
const words1 = ["APPLE", "banana", "KIWI", "ORANGE", "GRAPE"];

const  uppercaseWords = words1.filter(word => word === word.toUpperCase())
console.log(uppercaseWords)

//7//
const wordsY = ["happy", "sad", "sunny", "cloudy", "rainy"];

const notEndingWithY = wordsY.filter(word => !word.endsWith('y')) 
console.log(notEndingWithY)

//8//
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiplesOfBoth  = nums2.filter(num => num %6 === 0) 
console.log(multiplesOfBoth)

//9//
const feelingWords = ["happy", "sad", "sunny", "cloudy", "rainy"];
const wordsWithYandU = feelingWords.filter(word => word.includes("y") && word.includes("u"))
console.log(wordsWithYandU);  // Output: ["sunny", "cloudy"]


//10//

const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiplesOf5or3 = newNums.filter(num => num % 5 === 0 || num %3 === 0)
console.log(multiplesOf5or3)   