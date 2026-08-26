const scoreDisplay = document.querySelector("#score");

var realSuccessScore = localStorage.getItem("fScore");

scoreDisplay.innerHTML = realSuccessScore;