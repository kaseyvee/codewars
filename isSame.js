// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// function comp(array1, array2){
//   if (array1 === null || array2 === null) return false;
//   if (array1.length === 0 && array1.length === array2.length) return false;
    
//   for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array1.length; j++) {
//       if (array1[i] * array1[i] === array2[j]) {
//         array2.splice(j, 1);
//         console.log("array2: ", array2);
//       }
//     }
//   }
  
//   return array2.length === 0;
// }

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

let b2 = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]

console.log(comp(a1, a2)); // should be true
console.log(comp(a1, b2)); // should be false

// above doesn't pass all tests

// REFACTORED

function comp(array1, array2){
  if (array1 === null || array2 === null) return false;
  if (array1.length === 0 && array1.length !== array2.length) return false;
    
  const squaredArray = array1.map(num => num * num);
  
  const sortNumbers = (a, b) => {
    return a - b;
  }

  const newArray1 = squaredArray.sort(sortNumbers);
  const newArray2 = array2.sort(sortNumbers);
  
  for (let i = 0; i < newArray1.length; i++) {
    if (newArray1[i] !== newArray2[i]) return false;
  }

  return true;
}