// var myjson=
// {
//     "first":"Laurance","last":"Cruse"
// }
// var myjsonstring=JSON.stringify(myjson)
// var myjsonperse=JSON.parse(myjsonstring)
let AddButton=document.getElementById("addButton")
let SeeButton=document.getElementById("seeButton")
let PersonAddButton=document.getElementById("personAddButton")
let PersonSeeButton=document.getElementById("personSeeButton")
let te1_name=document.getElementById("firstName")
let te2_name=document.getElementById("lastName")
const first_Name=te1_name.value
const last_Name=te2_name.value


PersonAddButton.addEventListener("click",function()
{
    let objectperson=JSON.stringify({
        "first":first_Name,"last":last_Name
    })
  
    localStorage.setItem("arrtester",objectperson)
    
})
PersonSeeButton.addEventListener("click",function()
{
    localStorage.getItem("arrtester")
    console.log(localStorage.getItem('arrtester'))
})
AddButton.addEventListener("click",function()
{
    let temp=te1_name.value
    localStorage.setItem("tester",temp)
})
SeeButton.addEventListener("click",function()
{
    localStorage.getItem("tester")
    console.log(localStorage.getItem("tester"))
})