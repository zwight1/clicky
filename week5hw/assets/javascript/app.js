$('.fixed').scroll(function() { 
    $('.fixed').animate({top:$(this).scrollTop()});
});

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
 
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
 
        display.text(minutes + ":" + seconds);
        if (--timer < 0) {
            timer = duration;
        
        }
    }, 1000);
 }

 //What I was trying to figure out but couldn't get in here is a function that upon hitting 00:00
 //causes the function to do the same thing that the submit button does. 
 //using a for loop it would check the the radio like my next function does and give you the correct answer 
 //and incorrect answers after taking away everything in the container.
 
 jQuery(function ($) {
    var oneMinute = 60 * 1,
        display = $('#time');
    startTimer(oneMinute, display);


 });


 function handleClick()
  {         
var amountCorrect = 0;  
        
for(var i = 0; i <= 15; i++) {
  var radios = document.getElementsByName(+i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.value == "correct" && radio.checked) {
      amountCorrect++;}
    
  }
 }   
 var amountIncorrect = 0;
 for(var i = 0; i <= 15; i++) {
    var radios = document.getElementsByName(+i);
    for(var j = 0; j < radios.length; j++) {
      var radio = radios[j];
      if(radio.value != "correct" && radio.checked) {
        amountIncorrect++;}
                  
  }


 }
 $(".row").replaceWith( "<div id= 'middle'>" + "Correct Responses: " + amountCorrect + "</div>", "<div id = 'middle'>" + "Incorrect Responses: " + amountIncorrect + "</div>" );


}


