const questions = [
    {
        question: "Which keyword is used to declare a variable that cannot be reassigned?",
        answers: [
            "let",
            "var",
            "const",
            "static"
        ],
        correctAnswer: "const"
    },
    {
        question: "What is the correct way to write a function in JavaScript?",
        answers: [
            "function myFunction() {}",
            "function: myFunction() {}",
            "create myFunction() {}",
            "def myFunction() {}"
        ],
        correctAnswer: "function myFunction() {}"
    },
    {
        question: "Which method is used to add an element to the end of an array?",
        answers: [
            "pop()",
            "push()",
            "shift()",
            "unshift()"
        ],
        correctAnswer: "push()"
    },
    {
        question: "Which operator is used for strict equality in JavaScript?",
        answers: [
            "==",
            "=",
            "===",
            "!="
        ],
        correctAnswer: "==="
    },
    {
        question: "What does typeof null return in JavaScript?",
        answers: [
            "null",
            "undefined",
            "object",
            "string"
        ],
        correctAnswer: "object"
    },
    {
        question: "Which method removes the last element from an array?",
        answers: [
            "push()",
            "shift()",
            "pop()",
            "remove()"
        ],
        correctAnswer: "pop()"
    },
    {
        question: "Which method converts a JSON string into a JavaScript object?",
        answers: [
            "JSON.stringify()",
            "JSON.parse()",
            "JSON.convert()",
            "JSON.object()"
        ],
        correctAnswer: "JSON.parse()"
    },
    {
        question: "Which keyword is used to handle errors in JavaScript?",
        answers: [
            "try...catch",
            "error...handle",
            "check...error",
            "catch...error"
        ],
        correctAnswer: "try...catch"
    },
    {
        question: "Which method is used to create a new array by applying a function to every element?",
        answers: [
            "filter()",
            "forEach()",
            "map()",
            "reduce()"
        ],
        correctAnswer: "map()"
    },
    {
        question: "What does the === operator check?",
        answers: [
            "Only value",
            "Only type",
            "Value and type",
            "Variable name"
        ],
        correctAnswer: "Value and type"
    },
    {
        question: "Which keyword refers to the current object in JavaScript?",
        answers: [
            "self",
            "this",
            "current",
            "object"
        ],
        correctAnswer: "this"
    },
    {
        question: "Which method removes the first element from an array?",
        answers: [
            "shift()",
            "pop()",
            "push()",
            "slice()"
        ],
        correctAnswer: "shift()"
    }
];

var questionDisplay = document.getElementById("question");
var questionCounter = document.getElementById("question-number");
var optionsDisplay = document.getElementById("answers");


// This is created for checking answers.
var selectedItemForAnswer = '';

var count = 0;


var succeed = 0;
var failure = 0;



function quiz() {
    questionDisplay.innerHTML = questions[count].question;
    questionCounter.innerHTML = `Question ${count + 1} of ${questions.length}`;


    optionsDisplay.innerHTML = '';

    for (var i = 0; i < questions[count].answers.length; i++) {
        var currentItem = questions[count].answers[i];
        if (currentItem === selectedItemForAnswer) {
            optionsDisplay.innerHTML += `
            <button class="answer-btn selected" onclick="selected('${currentItem}')">
                ${currentItem}
            </button>
            `;

        } else {
            optionsDisplay.innerHTML += `
            <button class="answer-btn" onclick="selected('${currentItem}')">
                ${currentItem}
            </button>
            `;

        }


    }
}

function next() {




    if (count < questions.length && selectedItemForAnswer !== '') {
        if (selectedItemForAnswer === questions[count].correctAnswer) {
            succeed++;
            count++;
            console.log("🚀 ~ next ~ succeed:", succeed);
            selectedItemForAnswer = '';
            if(count === questions.length){
                
                result();
            }else{
                quiz();
            }
            
        } else {
            failure++;
            count++;

            selectedItemForAnswer = '';
            if(count === questions.length){
                
                result();
            }else{

                quiz();
        }
        }
    } 


}

function result(){
    if(((succeed/questions.length)*100) >= 70){
        window.location.replace("success.html");
    }else{
            window.location.replace('failure.html');
        }   
}



function selected(currentItem) {
    selectedItemForAnswer = currentItem;
    quiz()

}

var timeDisplay = document.getElementById("timer");
var seconds = 0;
var minutes = 0;


function timer(){
    if(seconds < 60){
        timeDisplay.innerHTML = `Time: ${minutes}: ${seconds}s`
        seconds++
    }else{
        minutes++
        seconds = 0;
        timeDisplay.innerHTML = `Time: ${minutes}: ${seconds}s`
        seconds++
    }
    
    
    if(minutes === 40){
        clearInterval(time);
        timeDisplay.innerHTML = `Time: 0: 0s`
        result()
    }
    
    
}
var time = setInterval(timer, 1000);




quiz();