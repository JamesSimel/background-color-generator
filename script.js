var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
const randomButton = document.querySelector(".random-color");

const randomColor = (e) => {
	var o = Math.round, r = Math.random, s = 255;
    body.style.background = 
			'linear-gradient(to right, ' + "rgb( " + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ")" + ',' 
				+ "rgb( " + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ")" + ')';
	
	css.innerHTML = body.style.background ;


}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ 
	color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color1.addEventListener("input", randomColor);

color2.addEventListener("input", setGradient);
color2.addEventListener("input", randomColor);

randomButton.addEventListener("click", randomColor);

window.addEventListener("load", setGradient);