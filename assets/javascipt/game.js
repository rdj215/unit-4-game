
//Declare Global Variables 
var displayNumber;
var wins;
var losses;
var totalScore;
var buttonNumber1;
var buttonNumber2;
var buttonNumber3;
var buttonNumber4;


    var buttonNumber = ["", "", "", ""];

    for (var i = 0; i < buttonNumber.length; i++) {




 displayNumber=Math.floor(Math.random() * 120)

 button.attr("data-buttons", buttonNumber[i]);

 
    
 var buttonNumber = ($(this).attr("data-buttons"));
 buttonNumber = parseInt(buttonnumber);

 totalScore += buttonNumber;

 alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

  });
 }


/*Functions
 
displayNumber = Math.floor(Math.random() * 120);
 $("#currentNumber").text(displayNumber);
 console.log(displayNumber)
;
 //$("#button1").on("click", function() {

    buttonNumber1= Math.floor(Math.random() * 12);
    //console.log(displayNumber);

    buttons.attr("data-buttons", buttonNumber);


