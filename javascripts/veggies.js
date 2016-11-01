var SandwichMaker = (function(maker) {

  var veggiePrices = {
    "Spinach": 0,
    "Tomato":0,
    "Roasted Peppers": .20,
    "Onions": 0
  }

  maker.addVeggies = function(topping) {
    return veggiePrices[topping];
  };

  return maker;
})(SandwichMaker);
