
var sq_num=6;
var colors = generateRandomColors(sq_num); //To generate x random colors
var col_disp = document.getElementById("col_disp");
var pickedColor = pickColor();			
var squares = document.querySelectorAll(".square");
var mess_disp = document.querySelector("#message");
var h1 = document.querySelector("h1");
var res = document.querySelector("#reset"); 
var diff_but = document.querySelectorAll(".diff");

col_disp.textContent = pickedColor;

//Difficulty mode event listeners
for(var i = 0; i < diff_but.length; i++)
{	
	diff_but[i].addEventListener("click",function(){
		diff_but[0].classList.remove("selected");
		diff_but[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "easy")
			sq_num = 3;
		else
			sq_num = 6;
		mode_ref();
	});
}

function mode_ref(){

	colors = generateRandomColors(sq_num);
	pickedColor = pickColor();
	col_disp.textContent = pickedColor;
	res.textContent= "New Colors?";
	mess_disp.textContent= "";
	for(var i=0; i<squares.length; i++)
	{	if(colors[i])
		{	
			squares[i].style.display = "block";
			squares[i].style.backgroundColor= colors[i];
		}
		else
			squares[i].style.display = "none";
	}
	h1.style.backgroundColor = "steelblue";

}
/* --Step-by-step for each difficulty mode specifier--

ezy_but.addEventListener("click",function(){
	
	sq_num = 3;
	ezy_but.classList.add("selected");
	hrd_but.classList.remove("selected");
	colors = generateRandomColors(sq_num);
	pickedColor = pickColor();
	col_disp.textContent = pickedColor;
	for(var i =0 ; i<squares.length; i++)
	{	if(colors[i])
			squares[i].style.backgroundColor = colors[i];
		else
			squares[i].style.display = "none" ; 
	}
})

hrd_but.addEventListener("click",function(){

	sq_num = 6;
	hrd_but.classList.add("selected");
	ezy_but.classList.remove("selected");
	colors = generateRandomColors(sq_num);
	pickedColor = pickColor();
	col_disp.textContent = pickedColor;
	for(var i =0 ; i<squares.length; i++)
	{	squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block" ; 
	}		
})
*/
res.addEventListener("click",function()
	{
		mode_ref();
	});

function Color_change(color)
{
	for(var k = 0; k < squares.length; k++)
	{
		squares[k].style.backgroundColor = color;
	}
} 
function pickColor()
{
	var choose = Math.floor(Math.random() * colors.length);
	return colors[choose];
}

//For specifying colors and comparing the picked color with clicked color
for(var i = 0; i < squares.length; i++)
{	
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click",function()
	{
		var clicked = this.style.backgroundColor;
		if (clicked == pickedColor) 
		{
			mess_disp.textContent = "Correct!";
			Color_change(clicked);
			h1.style.backgroundColor= clicked;
			res.textContent = "Play Again?"
		}
		else
		{ 
			this.style.backgroundColor = "#232323";
		  	mess_disp.textContent = "Try Again";
		}
	}
	);
}


function generateRandomColors(num){
	var a = [];
	for(var i = 0;i<num;i++)
	{
		a.push(randomColor());
	}
	return a;
}

function randomColor()
{
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb("+red+", "+green+", "+blue+")";
}
