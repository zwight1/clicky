$(document).ready(function () {
var wins= 0
var losses= 0
var randomNumber = Math.floor(Math.random() * 101) +19;
    $(".randomNumber").text(randomNumber);

var picOne = Math.floor(Math.random() * 11) + 1;
var picTwo = Math.floor(Math.random() * 11) + 1;
var picThree = Math.floor(Math.random() * 11) + 1;
var picFour = Math.floor(Math.random() * 11) + 1;

var total = 0
$(".total").text(total)

function restartGame(){
    $(".randomNumber").text(randomNumber)
    var picOne = Math.floor(Math.random() * 11) + 1;
    var picTwo = Math.floor(Math.random() * 11) + 1;
    var picThree = Math.floor(Math.random() * 11) + 1;
    var picFour = Math.floor(Math.random() * 11) + 1;
var counter =0
    $(".total").text(counter)
}

function win() {
    wins ++;
    $(".wins").text(wins);
    alert ("Winner Winner Chicken Dinner");
    restartGame();
}

function losses() {
    losses ++;
    $(".losses").text(losses);
    alert ("No wins this time");
    restartGame();
}

$(".picOne").on("click", function(){
    total = total + picOne; 

    if ( total == randomNumber){
        win();
    }
    else if (total > RandomNumber){
        lose();
    }
})
    
$(".picTwo").on("click", function(){
    total = total + picTwo; 
    
     if ( total == randomNumber){
        win();
    }
     else if (total > RandomNumber){
        lose();
    }    
})

$(".picThree").on("click", function(){
    total = total + picThree; 
    
    if ( total == randomNumber){
        win();
    }
    else if (total > RandomNumber){
        lose();
    }
})

$(".picFour").on("click", function(){
    total = total + picFour; 

    if ( total == randomNumber){
        win();
    }
    else if (total > RandomNumber){
        lose();
    }
})

})