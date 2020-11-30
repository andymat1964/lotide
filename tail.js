const assertEqual = require('./assertEqual');


const tail = function(array) {
  let result = array.slice(1, array.length);
  return result;
};

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words)); // no need to capture the return value since we are not checking it

module.exports = tail;
