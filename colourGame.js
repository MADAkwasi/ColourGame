var squares= document.querySelectorAll(".square");
var numSquares= 6;
var colours= generateRandomColours(numSquares);
var correctColour= colours[Math.floor(Math.random()*colours.length)];
var colourDisplay= document.querySelector("#colourDisplay");
var header= document.querySelector("#header");
var button= document.querySelector("button");
var h1= document.querySelector("h1");
var easyBtn= document.querySelector("#easyBtn");
var hardBtn= document.querySelector("#hardBtn");

colourDisplay.textContent= correctColour;

easyBtn.addEventListener("click", function(){

	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	h1.style.background= "steelblue";
	header.textContent= " ";
	button.textContent= "new colours";

	numSquares= 3;
	var colours= generateRandomColours(numSquares);
	randomColours();
	correctColour= colours[Math.floor(Math.random()*colours.length)];
	colourDisplay.textContent= correctColour;

	for(var i= 0; i<squares.length; i++){
		if(i<3){
			squares[i].style.background= colours[i];
		}
		else
		{
			squares[i].style.display= "none";
		}
	}

});

hardBtn.addEventListener("click", function(){

	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	h1.style.background= "steelblue";
	header.textContent= " ";
	button.textContent= "new colours";

	numSquares= 6;
	var colours= generateRandomColours(numSquares);
	randomColours();
	correctColour= colours[Math.floor(Math.random()*colours.length)];
	colourDisplay.textContent= correctColour;

	for(var i= 0; i<squares.length; i++){
		squares[i].style.background= colours[i];
		squares[i].style.display= "block";
	}

});

button.addEventListener("click", function(){
	var colours= generateRandomColours(numSquares);
	randomColours();
	for(var i= 0; i<squares.length; i++){
	squares[i].style.background= colours[i];
	}
	correctColour= colours[Math.floor(Math.random()*colours.length)];
	colourDisplay.textContent= correctColour;
	h1.style.background= "steelblue";
	this.textContent= "New Colours";
	header.textContent= " ";
});


function generateRandomColours(numSquares){
	var arr= [];
	for(var i= 0; i<numSquares; i++){
		arr.push(randomColours())
	}		
	return arr;
}


function randomColours(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

	for(var i= 0; i< squares.length; i++){
	squares[i].style.background= colours[i];

	squares[i].addEventListener("click", function(){
		var clickedColour= this.style.background;
	
	for(var i= 0; i< squares.length; i++){
			if(clickedColour === correctColour){
				for(var i= 0; i< squares.length; i++){
					squares[i].style.background= correctColour;
				}
				h1.style.background= correctColour;
				header.textContent= "CORRECT";
				button.textContent= "Play Again?";
			}
			else{
				this.style.background= "#232323";
				header.textContent= "TRY AGAIN";
			}
		}
	});
}

