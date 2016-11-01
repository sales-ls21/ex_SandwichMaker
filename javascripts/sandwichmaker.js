var SandwichMaker = (function() {

  var totalPrice = 2.50;

  return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
      document.getElementById("finalPrice").innerHTML = totalPrice.toFixed(2);
    }
  };
})();
