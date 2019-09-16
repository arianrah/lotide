// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected){
    let print = "🛑🛑🛑Assertion Failed: "+actual+" !== "+expected+"";
    console.log(print);
  } else {
    let print = "✅✅✅Assertion Passed: "+actual+" === "+expected+"";
    console.log(print);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); //non identical
assertEqual("Sneakers", "Sneakers"); //identical
assertEqual(1, 1); //identical numbers
assertEqual(1, 5); //non identical numbers
