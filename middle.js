const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for ( let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};

const middle = function(array) {
  for (let i = 0; i < array.length; i++) {
    if ( array.length === 1 || array.length === 2) {
       return []
    } else if (array.length % 2 !== 0) {
        let oddAarray = array.length / 2
        let valueIndex = Math.floor(oddAarray)
        let value = array[valueIndex]
        return [value]
    } else if (array.length % 2 === 0) {
        let evenArray = (array.length -1) / 2
        let startIndex = Math.floor(evenArray)
        let result = array.splice(startIndex, 2)
        return result;
    }
  } 
}

console.log(middle([1, 2, 3, 4]))
console.log(middle([1, 2, 3, 4, 5, 6]))
console.log(middle([1, 2, 3]))
