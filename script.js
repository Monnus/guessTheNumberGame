'use strict';

let secreteNumber=Math.floor(Math.random()*20)+1;
console.log(secreteNumber);
let score=20;
let highscore=0;

const displayMessage=(message)=>{
    document.querySelector(".message").textContent=message;
}
function checkingBtn(guess){
    //when player puts incorrect  number
    if(!guess){
        displayMessage("Not a  Number");

        //when player wins
    }else if(guess===secreteNumber){
        highscore++
        document.querySelector(".highscore").textContent=highscore;
        document.querySelector("body").style.backgroundColor="#60b347";
        document.querySelector(".number").style.width="30rem";
        document.querySelector(".number").textContent=secreteNumber;
        displayMessage("🎉 Correct guess");
        //when player guess is high
    }else if(guess !== secreteNumber){
        if(score >1){
            score --;
            displayMessage(guess> secreteNumber?"📈Number is to high":"📉number is to low")
            document.querySelector(".score").textContent=score;

        }  else {
            displayMessage("🎇You lost the game")
            document.querySelector(".score").textContent=0;
        }
    }
}

document.querySelector(".check").addEventListener("click",function(){
const guess=Number(document.querySelector(".guess").value);

    console.log(guess);
    checkingBtn(guess);
});

const resetFn=()=>{
document.querySelector(".guess").value="";

    score=20;
    highscore=0;
    document.querySelector(".highscore").textContent=0;
    secreteNumber=Math.floor(Math.random()*20)+1;
    document.querySelector(".message").textContent="Guess the number";
    document.querySelector(".score").textContent=score;
    document.querySelector("body").style.backgroundColor="black";
    document.querySelector(".number").style.width="15rem";
    document.querySelector(".number").textContent="?";

}
document.querySelector(".again").addEventListener("click",function(){
    resetFn();
})