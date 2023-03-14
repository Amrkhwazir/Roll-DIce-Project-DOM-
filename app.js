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

var player1 = document.querySelector('.player1')
var player2 = document.querySelector('.player2')


rollBtn.addEventListener('click',rollDiceHandler)

    var currentPlayer = 1
    function rollDiceHandler(){
        
        // Random number generate //
    
        var diceNumber = Math.round(Math.random()*5)+1
        console.log(diceNumber)
        // hidden class remove //
    
        diceImg.classList.remove('hidden')
        diceImg.src = `./Assets/${diceNumber}.png`
    
        if (diceNumber == 1) {
            if(currentPlayer == 1){
    
                score1.textContent = 0
                currentPlayer = 2
            }else{
                currentPlayer = 1
                score2.textContent = 0
            }
            player1.classList.toggle('active')
            player2.classList.toggle('active')
    
    }else{
        if(currentPlayer == 1){
            score1.textContent = Number(score1.textContent) + diceNumber
            totalPlayerScore1.textContent = Number(totalPlayerScore1.textContent) + Number(score1.textContent)
    
        }else{
            score2.textContent = Number(score2.textContent) + diceNumber
            totalPlayerScore2.textContent = Number(totalPlayerScore2.textContent) + Number(score2.textContent)
        
        }
    }
    }
    
        // hold button //
        holdBtn.addEventListener('click',holdHandler)
        function holdHandler(){
    
            player1.classList.toggle('active')
            player2.classList.toggle('active')

            if(totalPlayerScore1.textContent > totalPlayerScore2.textContent || totalPlayerScore1 == 100){
            alert("Congratulation Player1 Win's with Highest Marks ")
        }else if(totalPlayerScore1.textContent < totalPlayerScore2.textContent || totalPlayerScore2 == 100) {
            alert("Congratulation Player2 Win's with Highest Marks")
            
        }else{
            alert("Both have Same Score")
    
        }
    
    }
        // Reload Game //
    
    newBtn.addEventListener('click', reloadGame)
    function reloadGame(){
        window.location.reload()
    }
    
    