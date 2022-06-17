const Container=document.getElementById("container")

Container.innerHTML="<button onclick='buy()'>Water</button>"
function buy()
{
    Container.innerHTML+= "<p>Thank You For Buying</p>"
}