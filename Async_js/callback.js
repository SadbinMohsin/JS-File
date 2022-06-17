const posts = [
    {
        title: 'Post One', body: 'This is post one'
    },
    {
        title: 'Post Two', body: 'This is post two'
    }
];

/*function getPosts(){
    //const myTimeout = setTimeout(myGreeting, 5000);
    setTimeout(function()
    {

    },1000)
}*/
function getPosts() {
    setTimeout(() => {
        let output = ""
        let res = document.getElementById("demo")
        posts.forEach(function (item, index) {

            //output += `${index} : ${item.title} <br>`
            output += `<li>${item.title}</li> <br>`
         
        })
        res.innerHTML = output
    }, 1000)
}
/* This createPost don't occurs beacause it occurs after 2 sec 
but before it getposts give it no chance to occur . So that we
need call back function
function createPost(new_post)
{
    setTimeout( ()=>
    {
        posts.push(new_post)
    },2000)
}
getPosts()

createPost({title:'Post Three',body:'That is three'})
*/
function createPost(new_post,callback)
{
    setTimeout( ()=>
    {
        posts.push(new_post)
        callback()
    },2000)
}
createPost({title:'Post Three',body:'That is three'},getPosts)

