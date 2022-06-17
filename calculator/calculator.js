let num1=8
let num2=2
document.getElementById("number1").textContent=num1
document.getElementById("number2").textContent=num2
let Result=document.getElementById("Result")
function add()
{
 
    Result.textContent="Result :"+num1+num2
  
}
function divide()
{
    Result.textContent="Result :"+num1/num2
}
function subtract()
{  
    Result.textContent="Result :"+(num1-num2)
}
function multiply()
{
    Result.textContent="Result :"+num1*num2
}