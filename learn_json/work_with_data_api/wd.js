const addButton=document.getElementById("addButton")
const output=document.querySelector('#Output')
addButton.addEventListener("click",function(){
    const url="http://127.0.0.1:5500/shoe/shoe.html"
   
    fetch(url)
    .then(function(response){
        console.log(response.status);
        return response.json()
    })
})
output.addEventListener("click",function(){
    const url="http://127.0.0.1:5500/shoe/shoe.html"
    fetch(url)
    .then(function(data)
    {
        console.log(data)
    })
})