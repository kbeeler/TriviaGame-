//page loads
$( document ).ready(function() {
    $('#startOver').hide();

});

 //click handler -press start to begin the game
 $("#start").on("click", function(event) {
   //hide start after clicked
   $('#start').hide();
   //dislay timer
   timer();
   // display Question
   nextQuestion();
 });
 
 //global variables
 // set counter to 120 sec 
 var number = 120;
 var intervalId
  //  Decrease number by one.

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

//trivia questions array
 var questions = [{
   question: "How old am I- ",
   choices: [12, 14, 18, 19],
   correctAnswer: 3
 }, {
   question: "What color is my hair- ",
   choices: ["brown", "red", "green", "black"],
   correctAnswer: 0
 }, {
   question: "What size shoe do I wear- ",
   choices: [5, 6, 7, 8],
   correctAnswer: 2
 }, {
   question: "Where was I born- ",
   choices: ["cleveland", "fremont", "NYC", "florida"],
   correctAnswer: 2
 }, {
   question: "How many siblings do I have- ",
   choices: [1, 2, 3, 4],
   correctAnswer: 3
 }];


// var question = $("#question")
// var options = $("#options")


function nextQuestion() {
 // $("#question").append(questions.choices)
 console.log(nextQuestion);
   for (var i = 0; i < questions.length; i++) {
     var div = $("<div class= 'question'>" );
     div.text(questions[i].question);
    $("#question").append(div);
    // $("#question").append(questions[i].choices);
    addAnswers();

      };

    function addAnswers(answers) {
          var radioList = $('<ul>');
          var item;
          var button = '';
          for (var j = 0; j < questions[j].choices.length; j++) { 
                item = $('<li>');
                button = $('<input type ="radio" name= "choices" value=' + i + '/>');
                button.html(questions[i].choices[j]);
                item.append(button);
                radioList.append(item);
                

                if (j === questions[i].correctAnswer) {
                 button.attr('data-value', 'correct');
                }  
                else {
                 button.attr('data-value', 'wrong');    
                }                      
                $("#question").append(button);

           };
           return radioList;
       };

 
};

//track wins and losses
var win = 0
var lose = 0

$(document).on("click", '.choices', function() {
 if(this.getAttribute('data-value') === 'correct') {
   win++;
   console.log(win);
 }
 else if(this.getAttribute('data-value') === 'wrong') {
   lose++;
   console.log(lose);
 }
 
 //add if else conditions to check if data value = wrong or right answer
});

  

    