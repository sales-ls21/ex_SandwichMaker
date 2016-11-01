var SandwichMaker = (function(maker) {

  var breadPrices = {
  	Wheat: 0,
    Rye: .45,
    GF: .60,
    Pretzel: .70
  }

  maker.addBread = function(topping) {
    return breadPrices[topping];
  };

  return maker;
})(SandwichMaker);