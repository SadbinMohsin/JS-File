let countE1=document.getElementById("count-el")
let count=0
let Save_EL=document.getElementById("save-el")

function increment()
{
    count=count+1
    countE1.innerText=count
}
function save()
{  
    let count_passenger=" - "+count
    Save_EL.innerText+=count_passenger
    console.log(count)
}