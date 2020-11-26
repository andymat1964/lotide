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

const letterPositions = function(string) {
  const results = {};
  const noSpaceString = string.split(" ").join("");
  for (let index = 0; index < noSpaceString.length; index++) {
    const letter = noSpaceString[index]
    if (results[letter]) {
      results[letter].push(index)
    } else {
      results[letter] = [index];
    }
  }  
 return results;
}

console.log(letterPositions("Lighthouse in the house"));