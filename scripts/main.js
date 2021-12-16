/***** main.js *****/

//using onload to wait for the dom to load before accessing it
window.onload = function() {
    document.getElementById("Exam").onclick = function() {Exam()};
}

const TOTAL_PATTERNS = 3;
const Question = {
    ONE: "Which namespace is string a member of?",
    TWO: "Enter the operator used with cout",
    THREE: "Enter the keyword used to create integers"
};
const Answer = {
    ONE: "std",
    TWO: "<<",
    THREE: "int"
};

var dice, seconds;

function Exam(){
    let user_input;
    let score = 0;
    let time = new Date;
    seconds = time.getSeconds() + 1;
    dice = Math.round((Math.random() * seconds) % (TOTAL_PATTERNS-1));
    switch(dice){
        case 0:
            if(Ask(Question.ONE,Answer.ONE)) score++;
            if(Ask(Question.THREE,Answer.THREE)) score++;
            break;
        case 1:
            if(Ask(Question.TWO,Answer.TWO)) score++;
            if(Ask(Question.ONE,Answer.ONE)) score++;
            break;
        case 2:
            if(Ask(Question.THREE,Answer.THREE)) score++;
            if(Ask(Question.TWO,Answer.TWO)) score++;
            break;
    }
    if(score == 2) alert("You Passed!");
    else alert("You failed...");
}

function Ask(Q,A) {
    let user_input;
    user_input = prompt(Q).toLowerCase();
    if(user_input != A) {
        alert("Wrong!");
        return false;
    }
    else {
        alert("Correct!");
        return true;
    }
}
