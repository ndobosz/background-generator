var css = document.querySelector("h3");
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var button = document.getElementById("button");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background;
}



window.addEventListener("load", setGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", function() {
	// var random1 = Math.floor(Math.random() * 256);
	// var random2 = Math.floor(Math.random() * 256);
	// var random3 = Math.floor(Math.random() * 256);

	// var random4 = Math.floor(Math.random() * 256);
	// var random5 = Math.floor(Math.random() * 256);
	// var random6 = Math.floor(Math.random() * 256);

	// body.style.background = "linear-gradient(to right, " + "rgb(" + random1 + ", " + random2 + "," 
	// + random3 + "), rgb(" + random4 + ", " + random5 + "," 
	// + random6 + "))";
	var randomColor1 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	var randomColor2 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	body.style.background = "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";
	css.textContent = body.style.background;

	var randomColor1 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});


})