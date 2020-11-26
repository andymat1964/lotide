const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ + "Assertion Passed: "  ${actual}  ===   ${expected}`);
  } else {
    console.log(`❌ + "Assertion Failed " ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length === Object.keys(object2).length) {
    for (let key of Object.keys(object1)) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        } else return true;
      }
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc)); // => false