let player = {name: "Paulo", chips: 145}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")

/* let playerName = "Ehtisham"
let playerChips = 145
let playerEl = document.getElementById("player-el")
playerEl.textContent = playerName + ": $" + playerChips */

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNum = Math.floor(Math.random() * 13) + 1
    
    if (randomNum > 11){
        return 10
    } else if (randomNum === 1){
        return 11
    } else {
        return randomNum
    }
}

function startGame(){
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum < 21){
        message = "Do you want an other card?"
    } else if(sum === 21){
        message = "You got a black jack"
        hasBlackJack = true
    } else {
        message = "You are out of game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let cardNew = getRandomCard()
        sum += cardNew
        cards.push(cardNew)
        renderGame()
    }
    
}