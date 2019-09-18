// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed`);
  }
}

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); //non identical
assertEqual("Sneakers", "Sneakers"); //identical
assertEqual(1, 1); //identical numbers
assertEqual(1, 5); //non identical numbers
