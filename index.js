function saveUser(){
    let user = document.getElementsByClassName('user')
    localStorage.setItem("user", user[0].value);
}

let myAudio = document.getElementById('myAudio')
function playAudio(){
    myAudio.play()
}

function pauseAudio(){
    myAudio.pause()
}
