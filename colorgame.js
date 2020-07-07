var numSquares = 6;
var colors = randomColors(numSquares) ;
var finalcolor = colors[random()] ;
var squares = document.querySelectorAll(".square");
var headcolor = document.querySelector("#headcolor");
var result = document.querySelector("#result");
var num;
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

headcolor.textContent = finalcolor ; 


easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3 ;
	colors = randomColors(numSquares);
	finalcolor = colors[random()];
	headcolor.textContent = finalcolor;
	for(i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];

		}
		else{
			squares[i].style.display = "none" ;
		}
	}
	resetButton.textContent = "Change Color";
});

hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = randomColors(numSquares);
	finalcolor = colors[random()];
	headcolor.textContent = finalcolor;
	for(i =0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
	resetButton.textContent = "Change Color";

});


resetButton.addEventListener("click",function(){

	//generate random colors
	colors = randomColors(numSquares);

	//change all square colors
	for(i =0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
	}
	//change h1 color
	h1.style.backgroundColor = "steelblue";
	//change display color 
	finalcolor = colors[random()];
	headcolor.textContent = finalcolor;
	resetButton.textContent = "Change Color";
	//change result message
	result.textContent = "";

});

for(var i =0 ; i< squares.length; i++)
{
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click",function(){
		if(this.style.backgroundColor === finalcolor){
			result.textContent = "Correct";
			correctAll(finalcolor);
			resetButton.textContent = "Play Again?";
			h1.style.backgroundColor = finalcolor;
		} 
		else{
			this.style.backgroundColor = "#232323";
			result.textContent = "Try again";

		}

	});
		

}



function  correctAll(color)
		{
			for(var i=0; i<squares.length; i++)
			{
				squares[i].style.backgroundColor = color ;
			}
		}

function random()
{
	var random = Math.floor(Math.random()*colors.length);
	return random;

}

function randomColors(num){
	var arr = [];
	for(var i =0 ; i<num; i++){
		arr.push(colorsGenerate());

	}
	return arr;
}

function colorsGenerate(){
	var r =Math.floor(Math.random()*256);
	var g =Math.floor(Math.random()*256);
	var b =Math.floor(Math.random()*256);

	return "rgb(" +r+ ", " +g+ ", " +b+")" ;


}
