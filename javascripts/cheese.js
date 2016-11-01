var SandwichMaker = (function(maker) {

  var cheesePrices = {
  	Provolone: .10,
    American: 0,
    Cheddar: 0,
    Swiss: .10
  }

  maker.addCheese = function(topping) {
    return cheesePrices[topping];
  };

  return maker;
})(SandwichMaker);