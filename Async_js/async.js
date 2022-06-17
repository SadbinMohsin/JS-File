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
async function fetchusers()
{
    const res=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await res.json()
    console.log(data)
}
fetchusers()
