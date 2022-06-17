//localStorage.setItem()
// localStorage.getItem()
//localStorage.clear()-> It will clear all the document . 
localStorage.setItem("Lubu", "Wife of Swaccho")
// store element in array in local storage
let mystorage = `["amazon.com"]`
//1.Turn the mystorage string into array 
mystorage.JSON.parse(mystorage)
//2.Push a new element
mystorage.push("www.leadactor.com")
//3.Turn thr array into a string again
mystorage = JSON.stringify(mystorage)
//4.Console.log() the string to check if it is really string
console.log(typeof mystorage);
