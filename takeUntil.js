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


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item)
    } else  return results;
  }
}

const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


console.log(assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ])); // Should pass
console.log(assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Redwood' ])); // Should fail