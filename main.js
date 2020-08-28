let question = document.getElementById('question')
let choices = document.getElementsByClassName('choice-text')
let questionCount = document.getElementById('questionCounter')
let scoreCount = document.getElementById('scoreCounter')
let progressBar = document.getElementById('progress-bar-full')

let currQuestion = {}
let score = 0
let questCounter = 0
let available = []

//list pertanyaan
let questions = [
    {
        question: 'What is the capital city of Singapore?',
        choice1: 'Singapore',
        choice2: 'Temasek',
        answer: 1,
    },
    {
        question: "Which of the following was the old name of Jakarta?",
        choice1: "Buitenzorg",
        choice2: "Batavia",
        answer: 2,
    },
    {
        question: "Which country produces the most coffee in the world?",
        choice1: "Colombia",
        choice2: "Brazil",
        answer: 2,
    },
    {
        question: "What is the name of the Earth’s largest ocean?",
        choice1: "The Pacific Ocean",
        choice2: "The Atlantic Ocean",
        answer: 1,
    },
    {
        question: "Which country consumes the most chocolate per capita?",
        choice1: "Switzerland",
        choice2: "Germany",
        answer: 1,
    },
    {
        question: "Which country is known as the Land of White Elephant?",
        choice1: "India",
        choice2: "Thailand",
        answer: 2,
    },
    {
        question: "What country has the most vending machines per capita?",
        choice1: "Japan",
        choice2: "China",
        answer: 1,
    },
    {
        question: "According to legend, what was the name of King Arthur’s magician advisor?",
        choice1: "Morty",
        choice2: "Merlin",
        answer: 2,
    },
    {
        question: "Which country consumes the most coffee per capita?",
        choice1: "Finland",
        choice2: "USA",
        answer: 1,
    },
    {
        question: "Which of the following is the current President of Indonesia?",
        choice1: "Maaruf Amin",
        choice2: "Joko Widodo",
        answer: 2,
    }
]

const correctPoints = 10
const maxQuestions = 5

//menambahkan musik
let myAudio = document.getElementById('myAudio')
function playAudio(){
    myAudio.play()
}

function pauseAudio(){
    myAudio.pause()
}

//fungsi untuk memulai game
function startGame(){
    questCounter = 0
    score = 0
    available = [...questions]
    newQuestion()
}

// fungsi untuk membuat pertanyaan baru 
function newQuestion() {
    if(questCounter === maxQuestions){
        localStorage.setItem('finalScore', score)
        return window.location.assign("./end.html")
    }

    questCounter ++

    // untuk mengecek progress bar
    questionCount.innerText = `Question ${questCounter}/${maxQuestions}` 
    progressBar.style.width = `${100*questCounter/maxQuestions}%`

    let questIndex = Math.floor(Math.random() * available.length)
    currQuestion = available[questIndex]
    question.innerText = currQuestion.question

    for(let i = 0; i < choices.length; i++){
        choices[i].innerText = currQuestion['choice'+[i+1]]
    }

    available.splice(questIndex, 1)
}

for(let i = 0; i < choices.length; i++){
    choices[i].addEventListener('click', function(event){
        let selectedOption = event.target
        let selectedAnswer = selectedOption.dataset['number']
        
        let addClass = 'false'
        if(Number(selectedAnswer) === currQuestion.answer){
            addClass = 'true'
            //update score
            score += correctPoints
            scoreCount.innerText = score
        }
        //menambah class untuk manipulasi style
        selectedOption.parentElement.classList.add(addClass)
        
        setTimeout(function(){
            selectedOption.parentElement.classList.remove(addClass)
            newQuestion()
        }, 1000)
    })
}


startGame()