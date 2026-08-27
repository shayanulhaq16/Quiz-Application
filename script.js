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
        question: "Which keyword is used to declare a block-scoped variable?",
        answers: [
            "let",
            "var",
            "define",
            "new"
        ],
        correctAnswer: "let"
    },
    {
        question: "Which symbol is used for a single-line comment in JavaScript?",
        answers: [
            "!-->",
            "//",
            "/*",
            "#",
        ],
        correctAnswer: "//"
    },
    {
        question: "Which data type is used to store text?",
        answers: [
            "Number",
            "String",
            "Boolean",
            "Object"
        ],
        correctAnswer: "String"
    },
    {
        question: "Which data type can have true or false as its value?",
        answers: [
            "String",
            "Number",
            "Boolean",
            "Array"
        ],
        correctAnswer: "Boolean"
    },
    {
        question: "Which operator is used for addition?",
        answers: [
            "+",
            "-",
            "*",
            "/"
        ],
        correctAnswer: "+"
    },
    {
        question: "Which operator is used for strict equality?",
        answers: [
            "==",
            "=",
            "===",
            "!="
        ],
        correctAnswer: "==="
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: [
            "==",
            "=",
            "===",
            "=>"
        ],
        correctAnswer: "="
    },
    {
        question: "Which method adds an element to the end of an array?",
        answers: [
            "pop()",
            "push()",
            "shift()",
            "unshift()"
        ],
        correctAnswer: "push()"
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
        question: "Which method adds an element to the beginning of an array?",
        answers: [
            "push()",
            "pop()",
            "shift()",
            "unshift()"
        ],
        correctAnswer: "unshift()"
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
    },
    {
        question: "Which property is used to find the number of elements in an array?",
        answers: [
            "size",
            "length",
            "count",
            "items"
        ],
        correctAnswer: "length"
    },
    {
        question: "What is the correct way to write a function?",
        answers: [
            "function myFunction() {}",
            "function: myFunction() {}",
            "create myFunction() {}",
            "def myFunction() {}"
        ],
        correctAnswer: "function myFunction() {}"
    },
    {
        question: "Which keyword is used to return a value from a function?",
        answers: [
            "send",
            "return",
            "output",
            "value"
        ],
        correctAnswer: "return"
    },
    {
        question: "Which statement is used to make a decision in JavaScript?",
        answers: [
            "if",
            "loop",
            "check",
            "choose"
        ],
        correctAnswer: "if"
    },
    {
        question: "Which statement is used when the if condition is false?",
        answers: [
            "else",
            "otherwise",
            "false",
            "default"
        ],
        correctAnswer: "else"
    },
    {
        question: "Which loop is commonly used to repeat code a specific number of times?",
        answers: [
            "for",
            "if",
            "switch",
            "try"
        ],
        correctAnswer: "for"
    },
    {
        question: "Which loop runs while a condition is true?",
        answers: [
            "for",
            "while",
            "switch",
            "if"
        ],
        correctAnswer: "while"
    },
    {
        question: "Which keyword stops a loop?",
        answers: [
            "stop",
            "exit",
            "break",
            "end"
        ],
        correctAnswer: "break"
    },
    {
        question: "Which keyword skips the current iteration of a loop?",
        answers: [
            "skip",
            "continue",
            "next",
            "pass"
        ],
        correctAnswer: "continue"
    },
    {
        question: "Which object is used to work with the browser's webpage?",
        answers: [
            "HTML",
            "DOM",
            "CSS",
            "JSON"
        ],
        correctAnswer: "DOM"
    },
    {
        question: "Which method selects an element by its ID?",
        answers: [
            "getElementById()",
            "getById()",
            "selectId()",
            "queryId()"
        ],
        correctAnswer: "getElementById()"
    },
    {
        question: "Which method can select an element using a CSS selector?",
        answers: [
            "querySelector()",
            "getSelector()",
            "selectCSS()",
            "findElement()"
        ],
        correctAnswer: "querySelector()"
    },
    {
        question: "Which property is commonly used to change the text or HTML inside an element?",
        answers: [
            "innerHTML",
            "innerTextOnly",
            "htmlValue",
            "contentHTML"
        ],
        correctAnswer: "innerHTML"
    },
    {
        question: "Which property is used to get or set the value of an input?",
        answers: [
            "text",
            "value",
            "input",
            "data"
        ],
        correctAnswer: "value"
    },
    {
        question: "Which method is used to print something in the browser console?",
        answers: [
            "console.log()",
            "print()",
            "console.print()",
            "log.console()"
        ],
        correctAnswer: "console.log()"
    },
    {
        question: "Which function converts a string into an integer?",
        answers: [
            "parseInt()",
            "toString()",
            "parseString()",
            "int()"
        ],
        correctAnswer: "parseInt()"
    },
    {
        question: "Which method converts a JavaScript value into a string?",
        answers: [
            "toString()",
            "parseInt()",
            "stringifyText()",
            "convert()"
        ],
        correctAnswer: "toString()"
    },
    {
        question: "What does typeof return?",
        answers: [
            "The value of a variable",
            "The data type of a value",
            "The variable name",
            "The size of a value"
        ],
        correctAnswer: "The data type of a value"
    },
    {
        question: "Which value represents the absence of a value?",
        answers: [
            "null",
            "empty",
            "zero",
            "false"
        ],
        correctAnswer: "null"
    },
    {
        question: "Which value means a variable has not been assigned a value?",
        answers: [
            "null",
            "undefined",
            "empty",
            "none"
        ],
        correctAnswer: "undefined"
    },
    {
        question: "Which keyword creates a new object?",
        answers: [
            "create",
            "object",
            "new",
            "make"
        ],
        correctAnswer: "new"
    },
    {
        question: "Which brackets are used to create an array?",
        answers: [
            "()",
            "{}",
            "[]",
            "<>"
        ],
        correctAnswer: "[]"
    },
    {
        question: "Which brackets are used to create an object?",
        answers: [
            "()",
            "{}",
            "[]",
            "<>"
        ],
        correctAnswer: "{}"
    },
    {
        question: "Which method converts a JSON string into a JavaScript object?",
        answers: [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.convert()",
            "JSON.object()"
        ],
        correctAnswer: "JSON.parse()"
    },
    {
        question: "Which method converts a JavaScript object into a JSON string?",
        answers: [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.convert()",
            "JSON.toObject()"
        ],
        correctAnswer: "JSON.stringify()"
    },
    {
        question: "Which method creates a new array by changing every element?",
        answers: [
            "filter()",
            "forEach()",
            "map()",
            "find()"
        ],
        correctAnswer: "map()"
    },
    {
        question: "Which method creates a new array containing elements that pass a condition?",
        answers: [
            "map()",
            "filter()",
            "reduce()",
            "push()"
        ],
        correctAnswer: "filter()"
    },
    {
        question: "Which function is used to run code after a specified amount of time?",
        answers: [
            "setTimeout()",
            "setTime()",
            "wait()",
            "delay()"
        ],
        correctAnswer: "setTimeout()"
    }
];

var questionDisplay = document.getElementById("question");
var questionCounter = document.getElementById("question-number");
var optionsDisplay = document.getElementById("answers");



// This is created for checking answers.
var selectedItemForAnswer = '';

var count = 0;


var succeed = 0;


var progressBar = document.querySelector("#progress-bar");
var percentageOfWidth = 0;




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

            selectedItemForAnswer = '';
            if (count === questions.length) {

                result();
            } else {
                quiz();
            }

        } else {
            count++;

            selectedItemForAnswer = '';
            if (count === questions.length) {

                result();
            } else {

                quiz();
            }
        }
    }


    percentageOfWidth += 100 / questions.length;
    progressBar.style.width = percentageOfWidth + "%";

}

function result() {

    localStorage.setItem("Score", succeed);

    if (((succeed / questions.length) * 100) >= 70) {
        window.location.replace("success.html");
    } else {
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


function timer() {
    if (seconds < 60) {
        timeDisplay.innerHTML = `Time: ${minutes}: ${seconds}s`
        seconds++
    } else {
        minutes++
        seconds = 0;
        timeDisplay.innerHTML = `Time: ${minutes}: ${seconds}s`
        seconds++
    }


    if (minutes === 40) {
        clearInterval(time);
        timeDisplay.innerHTML = `Time: 0: 0s`
        result()
    }


}
var time = setInterval(timer, 1000);




quiz();