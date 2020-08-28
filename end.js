let final = document.getElementById('final-score')
let user = document.getElementById('user')
let finalScore = localStorage.getItem('finalScore')
let username = localStorage.getItem('user')

user.innerText = `Thank you, ${username} for playing.`
final.innerText = `Your score: ${finalScore}`