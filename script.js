const holes = document.querySelectorAll('.box')
const scoreDisplay = document.getElementById('score')

let score = 0

function randomTime (min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length)
    const hole = holes[idx]
    return hole
}

function peep(){
    const time = randomTime(1000, 1000)
    const hole = randomHole(holes)
    hole.classList.add("up")
    
    setTimeout(() => {
        hole.classList.remove("up")
        if (!timeUp) peep()
    }, time)
}
function bonk(e) {
    if (!e.isTrusted || !this.classList.contains('up')) return;
    score++;
    this.classList.remove('up');
    scoreDisplay.textContent = "Score: " + score;
}

holes.forEach(hole => hole.addEventListener('click', bonk));

let timeUp = false;
function startGame() {
    score = 0;
    scoreDisplay.textContent = "Score: " + score;
    // timeUp = false;
    peep();
    // setTimeout(() => timeUp = true, 10000); // 10 seconds game duration
}

startGame();