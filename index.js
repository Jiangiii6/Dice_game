
var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomImg = "images/dice"+ randomNumber1 + ".png";

 // document.querySelector("img1").setAttribute("src", "randomImg");
 // img1 is a name, not a selector,randomNumber1 does not need quotation marks

document.querySelectorAll("img")[0].setAttribute("src", randomImg);
// document.querySelectorAll("img")[1].setAttribute("src", randomImg);
//if put here, two images will get the same random value

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImg2 = "images/dice"+ randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImg2);

if(randomNumber1 > randomNumber2){
document.querySelector("h1").innerHTML=("🚩 Player 1 Wins!");
}else if(randomNumber1 < randomNumber2){
document.querySelector("h1").innerHTML=("Player 2 Wins! 🚩");
}else{
document.querySelector("h1").innerHTML=("Draw!");
}
