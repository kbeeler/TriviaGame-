// //page loads
// $( document ).ready(function() {
//     $('#startOver').hide();
//     $('#done').hide();
//     $(".stats").hide();

// });

//  //click handler -press start to begin the game
//  $("#start").on("click", function(event) {
//    //hide start after clicked
//    $('#start').hide();
//    //dislay timer
//    timer();
//    // display Question
//    nextQuestion();
//    $('#done').show()
//  });
 
//  //global variables
//  // set counter to 120 sec 
//  var number = 120;
//  var intervalId
//   //  Decrease number by one.

// //set interval
// function timer() {
//      clearInterval(intervalId);
//      intervalId = setInterval(decrement, 1000);
//    }
// //  The decrement function.
// function decrement() {
// number--;
// $("#countDown").html("<h2>" + number + "</h2>");
//  if (number === 0) {
//   //..run the stop function
//    stop();
//    alert("time up");
//  }
// }
// //  The stop function
// function stop() {
//  clearInterval(intervalId);
// }


// //trivia questionsArr array



// // var question = $("#question")
// // var options = $("#options")


// function nextQuestion() {
//  // $("#question").append(questionsArr.choices)
//  console.log(nextQuestion);
//    for (var i = 0; i < questionsArr.length; i++) {
//      var div = $("<div class= 'question'>" );
//      div.text(questionsArr[i].question);
//     $("#question").append(div);
//     // $("#question").append(questionsArr[i].choices);
//     addAnswers();

//       };

//       function addAnswers(answers) {
//           for (var j = 0; j < questionsArr[j].choices.length; j++) {          
//                 var button = $("<button class= 'choices'>");
//                 button.text(questionsArr[i].choices[j]);
//                 if (j === questionsArr[i].correctAnswer) {
//                  button.attr('data-value', 'correct');
//                 }  
//                 else {
//                  button.attr('data-value', 'wrong');    
//                 }                      
//                 $("#question").append(button);

//            };
//        };

//    };
 

// var done= $(".done")

// //track wins and losses
// var win = 0
// docWins = $(".win")
// docWins.textContent = win;

// var lose = 0
// docWins = $(".lose")
// docWins.textContent = lose;



// $(document).on("click", '.choices', function() {
//  if(this.getAttribute('data-value') === 'correct') {
//    win++;
//    console.log('win');
//  }
//  else if(this.getAttribute('data-value') === 'wrong') {
//    lose++;
//    console.log('lose');
//  }
//  $(".win")
//  //top button 

//  $("#done").on("click", function() {
//    //hide start after clicked
//    $('#done').hide();
//    $('.choices').hide();
//    $('.question').hide();
//    $('.stats').show();
//    stop();
//    $('#startOver').show();
//    $('#countDown').hide();
 
//  });
 
//  $("#startOver").on("click", function() {
//    //hide start after clicked
//    timer();
//    $('#done').show();
//    $('.choices').show();
//    $('.question').show();
//    $('.stats').hide();
//    $('#startOver').hide();
//    $('#countDown').show();
//  });

//  //add if else conditions to check if data value = wrong or right answer

// // trying to create a done button 
// //stop timer. 
// //clear page.
// //display wins and loss 

// //  var button = $("<button>done</button>");
 
// //  $("#done_div").append(button);
// //  button.button();

// // $("#done1").on("click", function() {
 
// //  stop();
// //   }

//   //store userguees when selected 
//   //make a done button
//   // make a status page 




// });

//////////////////////////////////////////////////

// //page loads
// $( document ).ready(function() {
//     $('#startOver').hide();
//     $('#done').hide();
//     $(".stats").hide();

// });

//  //click handler -press start to begin the game
//  $("#start").on("click", function(event) {
//    //hide start after clicked
//    $('#start').hide();
//    //dislay timer
//    timer();
//    // display Question
//    buildQuestions();
//    $('#done').show()
//  });

//  //global variables
//  // set counter to 120 sec
//  var number = 120;
//  var intervalId
//   //  Decrease number by one.

// //set interval
// function timer() {
//      clearInterval(intervalId);
//      intervalId = setInterval(decrement, 1000);
//    }
// //  The decrement function.
// function decrement() {
// number--;
// $("#countDown").html("<h2>" + number + "</h2>");
//  if (number === 0) {
//   //..run the stop function
//    stop();
//    alert("time up");
//  }
// }
// //  The stop function
// function stop() {
//  clearInterval(intervalId);
// }

// //trivia questions array
//  var questions = [{
//    question: "What cartoon is full of talking babies ?",
//    choices: ["doug","Rugrats", "cat-dog", "sonic"],
//    correctAnswer: 1
//  }, {
//    question: "What cartoon has two animals joined at the hip ?",
//    choices: ["Rugrats", "Sonic", "Angry Beavers","cat-dog",],
//    correctAnswer: 3
//  }, {
//    question: "A kids has a head shapped like a football ?",
//    choices: ["Doug", "Sailor Moon", "Power Puffs","Hey Arnold"],
//    correctAnswer: 3
//  }, {
//    question: "In what cartoon is the sister's name DEE DEE ?",
//    choices: ["Dexter's Lab","Ed, Ed, & Eddy", "Johnny Bravo", "Angry Beavers"],
//    correctAnswer: 0
//  }, {
//    question: "What cartoon is about taking over the world ? ",
//    choices: ["Dexter's lab","Rugrats","Pinky and the brain","Spongbob"],
//    correctAnswer: 2
//  }];



// // var question = $("#question")
// // var options = $("#options")


// function buildQuestions() {
//   var question_form = $('<form>');
//   for (var i = 0; i < questions.length; i++) {
//     var question = $('<p>').text(questions[i].question)
//     question_form.append(question)
//     for (var j = 0; j < questions[i].choices.length; j++) {
//       input = $('<input>', { id: questions[i].choices[j], type: "radio", name: questions[i].question });
//       label = $('<label>', { for: questions[i].choices[j]});
//       label.text(questions[i].choices[j]);
//       var div = $('<div class="question-choice">')
//       div.append([input, label])

//       if (j === questions[j].correctAnswer) {
//        label.attr('data-value', 'correct');
//       }
//       else {
//        label.attr('data-value', 'wrong');
//       }
//       question_form.append(div)
//     }
//   }
//   $('#questions').append(question_form)
// }

// //track wins and losses
// var done=$(".done")
// var win = 0
// var lose = 0

// $(document).on("click", '.choices', function() {
//  if(this.getAttribute('data-value') === 'correct') {
//    win++;
//    console.log(win);
//  }
//  else if(this.getAttribute('data-value') === 'wrong') {
//    lose++;
//    console.log(lose);
//  }
//  $(".win")
//  //top button 

//  $("#done").on("click", function() {
//    //hide start after clicked
//    $('#done').hide();
//    $('.choices').hide();
//    $('.question').hide();
//    $('.stats').show();
//    stop();
//    $('#startOver').show();
//    $('#countDown').hide();
 
//  });
 
//  $("#startOver").on("click", function() {
//    //hide start after clicked
//    timer();
//    $('#done').show();
//    $('.choices').show();
//    $('.question').show();
//    $('.stats').hide();
//    $('#startOver').hide();
//    $('#countDown').show();
//  });


//  //add if else conditions to check if data value = wrong or right answer
// });


// $( document ).ready(function() {
//      $('#startOver').hide();
//      $('#done').hide();
//      $('.stats').hide();

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

   startTimer: function() {
     clearInterval(timer)
     timer = setInterval(decrement, 1000);
   },
   resetTimer: function() {
     clearInterval(timer)
   },
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
 $(".questions").hide();
 $(".choices").hide()
 gameOver()
});

function buildQuestions() {
 var question_form = $('<form>');
 for (var i = 0; i < questions.length; i++) {
   var question = $('<p>').text(questions[i].question)
   question_form.append(question)
   for (var j = 0; j < questions[i].choices.length; j++) {
     input = $('<input>', { id: questions[i].choices[j], type: "radio", name: questions[i].question });
     label = $('<label>', { for: questions[i].choices[j]});
     label.text(questions[i].choices[j]);
     var div = $('<div class="question-choice">')
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
  

    