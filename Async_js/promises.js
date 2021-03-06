const posts = [
    {
        title: 'Post One', body: 'This is post one'
    },
    {
        title: 'Post Two', body: 'This is post two'
    }
];
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
function createPost(new_post)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout( ()=>
        {
            posts.push(new_post)
            const error=true
            if(!error)
            {
                resolve();
            }
            else
            {
                reject('Error: Something went wrong')
            }
           
        },2000)
    })
   
}
// createPost({title:'Post Three',body:'That is three'})
// .then(getPosts)
// .catch(error=>console.log(error))
const promise1=Promise.resolve("Hello World")
const promise2=10
const promise3=new Promise((resolve,reject)=>
setTimeout(resolve,2000,'GoodBye')
);
const promise4=fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())
Promise.all([promise1,promise2,promise3,promise4])
.then(values=>
 console.log(values)    
)
