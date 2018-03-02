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
   buildQuestions();
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


function buildQuestions() {
  var question_form = $('<form>');
  for (var i = 0; i < questions.length; i++) {
    for (var j = 0; j < questions[i].choices.length; j++) { 
      input = $('<input>', { id: questions[i].choices[j], type: "radio", name: questions[i].question });
      label = $('<label>', { for: questions[i].choices[j]});
      label.text(questions[i].choices[j]);
      var div = $('<div class="question">')
      div.append([input, label])

      if (j === questions[j].correctAnswer) {
       label.attr('data-value', 'correct');
      }  
      else {
       label.attr('data-value', 'wrong');    
      }

      question_form.append(div)
    }
  }
  $('#questions').append(question_form)
}

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

  

    