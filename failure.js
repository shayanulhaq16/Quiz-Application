const scoreDisplay = document.querySelector("#score");

var failureScore = localStorage.getItem("Score");

scoreDisplay.innerHTML = failureScore;