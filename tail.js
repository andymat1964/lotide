const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ + "Assertion Passed: "  ${actual}  ===   ${expected}`);
  } else {
    console.log(`❌ + "Assertion Failed " ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let result = array.slice(1, array.length);
  return result;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!