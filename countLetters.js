const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ + "Assertion Passed: "  ${actual}  ===   ${expected}`);
  } else {
    console.log(`❌ + "Assertion Failed " ${actual} !== ${expected}`);
  }
};

const countLetters = function(letters) {
  let result = {};
  letters = letters.split(" ").join("")
  for (let letter of letters) {
      if (result[letter]) {
        result[letter]++
      } else {
        result[letter] = 1
      }
   }
  return result;
}
console.log(countLetters("lighthouse in the house"));
