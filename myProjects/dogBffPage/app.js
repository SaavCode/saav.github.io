var pics = [
	"images/d1.jpg",		//0
	"images/d2.jpg",		//1
	"images/d3.jpg",		//2
	"images/d4.jpg",		//3
	"images/d5.jpg"		//4

];

var btn = document.querySelector("button");
var img = document.querySelector("img");

var counter = 1;

btn.addEventListener("click",function(){
	if (counter ===5) {
		counter=0;
	}
	img.src = pics[counter]
	counter = counter + 1;
});