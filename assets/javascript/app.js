//page loads
$( document ).ready(function() {
    $('#startOver').hide();
    $('#done').hide();
    $(".stats").hide();

});

 
 
 //global variables
 // set counter to 120 sec 
 var number = 120;
 var intervalId
  
  //trivia questionsArr array
 var questionsArr = [{
   question: "What cartoon is full of talking babies ?",
   choices: ["doug","Rugrats", "cat-dog", "sonic"],
   correctAnswer: 1
 }, {
   question: "What cartoon has two animals joined at the hip ?",
   choices: ["Rugrats", "Sonic", "Angry Beavers","cat-dog",],
   correctAnswer: 3
 }, {
   question: "A kids has a head shapped like a football ?",
   choices: ["Doug", "Sailor Moon", "Power Puffs","Hey Arnold"],
   correctAnswer: 3
 }, {
   question: "In what cartoon is the sister's name DEE DEE ?",
   choices: ["Dexter's Lab","Ed, Ed, & Eddy", "Johnny Bravo", "Angry Beavers"],
   correctAnswer: 0
 }, {
   question: "What cartoon is about taking over the world ? ",
   choices: ["Dexter's lab","Rugrats","Pinky and the brain","Spongbob"],
   correctAnswer: 2
 }];

 //click handler -press start to begin the game
 $("#start").on("click", function(event) {
   //hide start after clicked
   $('#start').hide();
   //dislay timer
   timer();
   // display Question
   nextQuestion();
   $('#done').show()
 });

//set interval
function timer() {
     clearInterval(intervalId);
     intervalId = setInterval(decrement, 1000);
   }
//  The decrement function.
function decrement() {
number--;
$("#countDown").html("<h2>" + number + "</h2>");
 if (number === 0) {
  //..run the stop function
   stop();
   alert("time up");
 }
}
//  The stop function
function stop() {
 clearInterval(intervalId);
}

// var question = $("#question")
// var options = $("#options")


function nextQuestion() {
 // $("#question").append(questionsArr.choices)
 console.log(nextQuestion);
   for (var i = 0; i < questionsArr.length; i++) {
     var div = $("<div class= 'question'>" );
     div.text(questionsArr[i].question);
    $("#question").append(div);
    // $("#question").append(questionsArr[i].choices);
    addAnswers();

      };

      function addAnswers(answers) {
          for (var j = 0; j < questionsArr[j].choices.length; j++) {          
                var button = $("<button class= 'choices'>");
                button.text(questionsArr[i].choices[j]);
                if (j === questionsArr[i].correctAnswer) {
                 button.attr('data-value', 'correct');
                }  
                else {
                 button.attr('data-value', 'wrong');    
                }                      
                $("#question").append(button);

           };
       };

   };
 

var done= $(".done")

//track wins and losses
var win = 0
docWins = $(".win")
docWins.textContent = win;

var lose = 0
docWins = $(".lose")
docWins.textContent = lose;



$(document).on("click", '.choices', function() {
 if(this.getAttribute('data-value') === 'correct') {
   win++;
   console.log('win');
 }
 else if(this.getAttribute('data-value') === 'wrong') {
   lose++;
   console.log('lose');
 }
 $(".win")
 //top button 

 $("#done").on("click", function() {
   //hide start after clicked
   $('#done').hide();
   $('.choices').hide();
   $('.question').hide();
   $('.stats').show();
   stop();
   $('#startOver').show();
   $('#countDown').hide();
 
 });
 
 $("#startOver").on("click", function() {
   //hide start after clicked
   timer();
   $('#done').show();
   $('.choices').show();
   $('.question').show();
   $('.stats').hide();
   $('#startOver').hide();
   $('#countDown').show();
 });

 //add if else conditions to check if data value = wrong or right answer

// trying to create a done button 
//stop timer. 
//clear page.
//display wins and loss 

//  var button = $("<button>done</button>");
 
//  $("#done_div").append(button);
//  button.button();

// $("#done1").on("click", function() {
 
//  stop();
//   }

  //store userguees when selected 
  //make a done button
  // make a status page 




});

  

    