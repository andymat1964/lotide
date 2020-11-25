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

const without = function(source, itemsToRemove) {
  // return an new array
  ///loop through the soruce array and comaprre it to the itemsTo Remove array
  let newArray = [];
  
  for (let i = 0; i < source.length; i++) {
    let okToPush = true;
    for ( let j = 0; j < itemsToRemove.length; j++) {
      if( source[i] === itemsToRemove[j]) {
        okToPush = false;
      }
      if(okToPush) {
        newArray.push(source[i]);
      }
    }
  }
  return newArray;
}

console.log(without([1, 2, 3], [1]))// => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]));