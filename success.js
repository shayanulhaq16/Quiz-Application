const scoreDisplay = document.querySelector("#score");

var realSuccessScore = localStorage.getItem("sScore");

scoreDisplay.innerHTML = realSuccessScore;
