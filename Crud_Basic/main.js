let form=document.getElementById("form")
let input=document.getElementById("input")
let msg=document.getElementById("msg")

form.addEventListener("submit",(e)=>
{
   e.preventDefault()//So that button clicked can be visible . Not like go and come 
   console.log("Button Clicked"); 
   formvalidation()
})
let formvalidation=()=>{
    if(input.value==="")//if input is blanked 
    {
       msg.innerHTML="Text file can't be BLANK"
     
    }
    else   
    {
        msg.innerHTML=""
        acceptdata()
    }
}
let data={}
let acceptdata= ()=>{
   data["text"]=input.value
   console.log(data)
   createPost()
}
let createPost=()=>{
   
    posts.innerHTML+=

        `<div>
        <p>${data.text}</p>
        <span class="options">
          <i onClick="editPost(this)" class="fas fa-edit"></i>
          <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
      </div>
    
      `    
}


let deletePost =(e)=>{
    e.parentElement.parentElement.remove()
}
let editPost =(e)=>{
     input.value=e.parentElement.previousElementSibling.innerHTML
     e.parentElement.parentElement.remove()
}
