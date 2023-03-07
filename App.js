const keys = document.querySelectorAll('.key')

function playSound(url) {
    new Audio(url).play()
}


let audio = new Audio("piano-keys/a.mp3")

const playTune = (key) => {
    audio.src = `piano-keys/${key}.mp3`;
    audio.play()
}


keys.forEach(key => {
    key.addEventListener("click", () => playTune(key.id))
})

const pressedKey = (e) => {
    playTune(e.key)
}

 document.addEventListener("keydown", pressedKey)