var SandwichMaker = (function(maker) {

  var condimentPrices = {
  	"Mustard": 0,
    "Mayo": 0,
    "Horseradish": .10,
    "Avocado Ranch": .30
  }

  maker.addCondiments = function(condiment) {
    return condimentPrices[condiment];
  };

  return maker;
})(SandwichMaker);

