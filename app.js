var newBtn = document.querySelector('.newBtn')
console.log(newBtn)

var diceImg = document.querySelector('.diceImg')
console.log(diceImg)

var rollBtn = document.querySelector('.rollBtn')
console.log(rollBtn)

var holdBtn = document.querySelector('.holdBtn')
console.log(holdBtn)

var totalPlayerScore1 = document.querySelector('.totalPlayerScore1')
console.log(totalPlayerScore1)

var totalPlayerScore2 = document.querySelector('.totalPlayerScore2')
console.log(totalPlayerScore2)

var score1 = document.querySelector('.score1')
console.log(score1)

var score2 = document.querySelector('.score2')
console.log(score2)

var col = document.querySelector('.col')
console.log(col)



rollBtn.addEventListener('click',rollDiceHandler)

function rollDiceHandler(){

    // Random number generate //

    var diceNumber = Math.round(Math.random()*5)+1
    console.log(diceNumber)
    // hidden class remove //

    diceImg.classList.remove('hidden')
    diceImg.src = `./Assets/${diceNumber}.png`

    if(diceNumber == 1){
        score1.textContent = 0  
    }
     else if(diceNumber != 0){
        score1.textContent = Number(diceNumber)
        totalPlayerScore1.textContent = Number(totalPlayerScore1.textContent) + Number(score1.textContent)
    }}

    // hold button //
    holdBtn.addEventListener('click',holdHandler)
    function holdHandler(){
}
    // Reload Game //

newBtn.addEventListener('click', reloadGame)
function reloadGame(){
    window.location.reload()
}

