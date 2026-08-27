const scoreDisplay = document.querySelector("#score");

var successScore = localStorage.getItem("Score");

scoreDisplay.innerHTML = successScore;
