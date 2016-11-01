// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
  	"Pastrami": .90,
  	"Ham": .50,
  	"Turkey": .50,
  	"Roast Beef": .60
  }
  // Augment the original object with another method
  maker.addMeat = function(topping) {
  	return meatPrices[topping];

  	  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);