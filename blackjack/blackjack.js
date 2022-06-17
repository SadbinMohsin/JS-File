let cardsarr = []
let SUM_ALL = document.getElementById("sum-el")
let Cards_ALL = document.getElementById("cards-el")
// creating object of player
let Player_Identity={
    Player_Name:"Sadbin",
    price:0
}
function  player()
    {
    let Player_El=document.getElementById("player-el")
    Player_Identity.price=check_sum()
    Player_El.textContent=Player_Identity.Player_Name+"'s point is "+Player_Identity.price
    }

function check_sum()
{
    let sum=0
    for(let j in cardsarr)
    {
        sum+=cardsarr[j]
    }
    return sum
}

function getrandom_number() {
    let random_number = Math.floor(Math.random() * 13)+1
    if (random_number === 1)
        return 11;
    else if (random_number > 10)
        return 10
    else
        return random_number
}


function rendergame() {
    Cards_ALL.textContent = "Cards: "
    for (let i in cardsarr) {
        Cards_ALL.textContent += cardsarr[i] + " "
    }
}
function check_message() {
    let Massage_ALL = document.getElementById("message-el")
    if (check_sum() <= 20) {
        message = "Do you want to play  the game !?"
    }
    else if (check_sum()  === 21) {
        message = "Whohho ! You've got Blackjack"
    }
    else {
        message = "YOu are out of game !"
    }

    SUM_ALL.textContent = "SUM :" + check_sum();
    Massage_ALL.textContent = message
}
function start() {
    let first = getrandom_number(), second = getrandom_number()
    cardsarr = [first, second]
    check_sum() 
    rendergame()

    check_message()
    player()
    
}
function isAlive() {
    if (check_sum() < 21) {
        return true
    }
    else {
        return false
    }
}
function Have_BlackJack() {
    if (check_sum() === 21) {
        return true
    }
    else {
        return false
    }
}
function new_card() {

    if(check_sum()>21)
    {
        Cards_ALL.textContent = "Cards: "+0
        SUM_ALL.textContent = "SUM :" + 0
    }

    if (isAlive()===true&&Have_BlackJack()===false) {
        let card = getrandom_number()
        cardsarr.push(card)
        rendergame()
        check_sum()
        check_message()
        player()
    }
   
}