
//create a rolldice which return number from 1-6

let random_num = Math.floor(Math.random() * 6) + 1
let dice_all = document.getElementById("dice")
dice_all.textContent=random_num