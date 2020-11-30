const tail = require('./tail');

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(words.length, 3); // original array should still have 3 elements!