document.addEventListener("DOMContentLoaded", function() {
  const message = document.querySelector("#message");
  const answer = document.querySelector("#answer");
  const hint = document.querySelector("#hint");
  const chance = document.querySelector("#chance");
  const userAnswer = document.querySelector("#userAnswer");

  const MAX_NUMBER = 20;
  const MAX_ATTEMPS = 5;

  let randomNumber = generateRandomNumber();
  let attempts = MAX_ATTEMPS;

  function generateRandomNumber() {
    return Math.floor(Math.random() * MAX_NUMBER) + 1;
  };

  function isNumber() {
    const userValue = parseInt(userAnswer.value);
    if (!isNaN(userValue)) {
      validataNumberRange();
    } else {
      alert("Please enter among the numbers!");
    }
  };

  function validataNumberRange() {
    const userValue = parseInt(userAnswer.value);
    if (userValue > MAX_NUMBER || userValue <= 0) {
      alert(`Please enter a number between 1 and ${MAX_NUMBER}`);
    } else {
      checkAnswer();
    }
  };

  function checkAnswer() {
    const userValue = parseInt(userAnswer.value);
    provideHint();
  
    if (attempts > 0) {
      if (userValue === randomNumber) {
        message.textContent = "Correct!";
        answer.textContent = `The number is ${randomNumber}`;
        chance.textContent = "";
        setTimeout(resetGame, 7000);
      } else {
        message.textContent = "Wrong! Try Again!";
        answer.textContent = "";
        attempts--;
        chance.textContent = `You have left ${attempts} chances`;
  
        if (attempts === 0) {
          message.textContent = "You have run out of chances!";
          answer.textContent = `The number is ${randomNumber}`;
          chance.textContent = "";
          hint.textContent = "";
          setTimeout(resetGame, 7000);
        }
      }
    }
  };
  
 
  function provideHint() {
    const userValue = parseInt(userAnswer.value);
    
    if (userValue > randomNumber) {
      hint.textContent = `The number is lower than ${userValue}`;
    } else if (userValue < randomNumber) {
      hint.textContent = `The number is higher than ${userValue}`;
    } else if (userValue === randomNumber) {
      hint.textContent = "";
    }
  };

  function resetGame() {
    message.textContent = "";
    answer.textContent = "";
    hint.textContent = "";
    chance.textContent = "";
    userAnswer.value = "";
    attempts = MAX_ATTEMPS;
    randomNumber = generateRandomNumber();
  }

  userAnswer.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      isNumber();
    }
  })
})