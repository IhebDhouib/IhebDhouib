const quizData = [
    {
        question: "1/ Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "2/ What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "3/ What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "4/ What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "5/ Who is making the Web standards?",
        a: " The World Wide Web Consortium",
        b: " Microsoft",
        c: " Mozilla",
        d: " Google",
        correct: "a",
    },
    {
        question: "6/ Choose the correct HTML element for the largest heading:",
        a: "<h6>",
        b: "<body>",
        c: "<h1>",
        d: "<heading>",
        correct: "c",
    },
    {
        question: "7/ What is the correct HTML element for inserting a line break?",
        a: "<break>",
        b: "<br>",
        c: "<lb>",
        d: "<i>",
        correct: "b",
    },
    {
        question: "8/ Choose the correct HTML element to define important text",
        a: "<b>",
        b: "<important>",
        c: "<strong>",
        d: "<i>",
        correct: "c",
    },
    {
        question: "9/ Choose the correct HTML element to define emphasized text",
        a: "<em>",
        b: "<i>",
        c: "<italic>",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "10/ How can you make a numbered list?",
        a: "<ul>",
        b: "<dl>",
        c: "<ol>",
        d: "<list>",
        correct: "c",
    },
    {
        question: "11/ How can you make a bulleted list?",
        a: "<ul>",
        b: "<dl>",
        c: "<ol>",
        d: "<list>",
        correct: "a",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < 11) {
           loadQuiz()
       } else {
        document.getElementById("demo").style.display = "none";
           quiz.innerHTML = `
           <div class="box" id="quiz">
            <div class="card2">
            <i class="fa-solid fa-crown" style="font-size: 40px"></i>
            <h5>Well Done</h5>
            <br><br><br>
            <h5>You answered ${score}/11 questions correctly</h5>
            <br><br>
            <p style="text-align: center;">
            <a class="button" href="formulaire.html">next</a>
        </p>               
            </div>
        </div>
           
           `
       }
    }
})