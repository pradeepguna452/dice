function play(){

var randomNumber1 =Math.floor(Math.random()*6)+1;

var randomimage="dice"+randomNumber1+".png";

var randomdiceimage="image/"+randomimage;

 var image1 = document.querySelectorAll("img")[0];

 image1.setAttribute("src" , randomdiceimage);


 var randomNumber2 =Math.floor(Math.random()*6)+1;

var randomimage2="dice"+randomNumber2+".png";

var randomdiceimage2="image/"+randomimage2;

 var image2 = document.querySelectorAll("img")[1];

 image2.setAttribute("src" , randomdiceimage2);


 if (randomNumber1>randomNumber2) {

document.querySelector("h1").innerHTML=("player 1 is the winner");

} else if (randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML=("match is drawn try again ")
}
else {
    document.querySelector("h1").innerHTML=("player 2 is the winner")
}

}

document.getElementById("button").addEventListener("mousedown", play);


