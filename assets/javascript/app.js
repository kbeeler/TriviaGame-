
//global variables

//trivia questions array
   var questions = [{
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

 var timer;
 var game = {
   win: 0,
   lose: 0,

   questionsRight: 0,
   correctAnswers: [],
   timeRemaining: 100,

 // set counter to 100 sec 
   startTimer: function() {
     clearInterval(timer)
     timer = setInterval(decrement, 1000);
   },

   //clears timer
   resetTimer: function() {
     clearInterval(timer)
   },

   //start function to start the game
   start: function() {
     game.reset()
     game.startTimer()
   },
   reset: function() {
     game.resetTimer();
     game.questionsRight = 0;
     game.correctAnswers = [];
     game.timeRemaining = 100;
   }
 }
//ready the DOm
 $( document ).ready(function() {
    $('#startOver').hide();
    $('#done').hide();
    $('.stats').hide();

});

 // Click handler for the 'Start' button
 $("#start-button").on("click", function(event) {
   game.start()
   $('#start-button').hide();
   //dislay timer
   // display Question
   buildQuestions();
   $('#done').show();

 });


function decrement() {
 game.timeRemaining--;
 $("#show-number").html("<h2>" + game.timeRemaining + "</h2>");
 if (game.timeRemaining === 0) {
   alert("Time's up!");
   game.lose++
   gameOver();
 }
}

//track the correct choices

$(document).on("click", '.choices', function trackStats() {
 if(this.getAttribute('data-value') === 'correct' && !game.correctAnswers.includes($(this).text())) {
   game.correctAnswers.push($(this).text());
   game.questionsRight++;
 } else if (game.correctAnswers.includes($(this).text())) {
   game.questionsRight--;
 }
})


$('#startOver').on('click', function() {
 newGame();
});

$('#done').on('click', function() {
 if (game.questionsRight === questions.length) {
   game.win++
 } else {
   game.lose++
 }

 //hide the questions and choices when game is done
 $(".questions").hide();
 $(".choices").hide()
 gameOver()
});

// runs loop to build the questions and choices
function buildQuestions() {
 var question_form = $('<form>');
 for (var i = 0; i < questions.length; i++) {
   var question = $('<p id="questionPara">').text(questions[i].question)
   question_form.append(question)

   for (var j = 0; j < questions[i].choices.length; j++) {
     var input = $('<input>', { id: questions[i].choices[j], type: "radio", name: questions[i].question });
     var label = $('<label>', { for: questions[i].choices[j]});
     label.text(questions[i].choices[j]);
     var div = $('<div class="choices">')
     div.append([input, label])

     if (j === questions[i].correctAnswer) {
      div.attr('data-value', 'correct');
     }
     else {
      div.attr('data-value', 'wrong');
     }
     question_form.append(div)
   }
 }
 $('#questions').append(question_form)

}
//when the game is over we are hiding the game 
function gameOver() {
 game.reset();
 $('#win-count').text('win ' + game.win);
 $('#lose-count').text('lose ' + game.lose);
 $("#done").hide();
 $(".choices").hide();
 $(".question").hide();
 $('.stats').show();
 $('#startOver').show();
 $("#show-number").hide();
}
// when we reset the game shows again
function newGame() {
 game.start();
 $(".choices").show();
 $(".question").show();
 $('#startOver').hide();
 $("#show-number").show();
 $('.stats').hide();
 $("#done").show();
}




 //add if else conditions to check if data value = wrong or right answer
  

    