document.getElementById("meat").addEventListener("change", grabMeat);

var meatAddOn;

function grabMeat(event){
  var topping = event.target.value;
  meatAddOn = SandwichMaker.addMeat(topping);
  SandwichMaker.addTopping(meatAddOn);
}

var breadAddOn;
document.getElementById("bread").addEventListener("change", grabBread);
function grabBread (event){
	var bread = event.target.value;
	breadAddOn = SandwichMaker.addBread(bread);
	SandwichMaker.addTopping(breadAddOn);
}

var condimentAddOn;
document.getElementById("sauce").addEventListener("change", grabCondiment);

function grabCondiment(event){
	var condiment = event.target.value;
	condimentAddOn = SandwichMaker.addCondiments(condiment);
	SandwichMaker.addTopping(condimentAddOn);
}

var cheeseAddOn;
document.getElementById("cheese").addEventListener("change", grabCheese);

function grabCheese(event){
	var cheese = event.target.value;
	cheeseAddOn = SandwichMaker.addCheese(cheese);
	SandwichMaker.addTopping(cheeseAddOn);
}

var veggieAddOn;
document.getElementById("veggies").addEventListener("change", grabVeggies);

function grabVeggies(event){
	var veggies = event.target.value;
	veggieAddOn = SandwichMaker.addVeggies(veggies);
	SandwichMaker.addTopping(veggieAddOn);
}