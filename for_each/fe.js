//The forEach() method calls a function for each element in an array.
//array.forEach(function(currentValue, index, arr), thisValue)
let text=""
const fruits = ["apple", "orange", "cherry"]
fruits.forEach(myfunction)
let res=document.getElementById("demo")
res.innerHTML=text // This line 6 and 7 will show the fruits name in tab
function myfunction(item,i)
{
   text+=`${i} : ${item} <br>`
}