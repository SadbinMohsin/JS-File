let myLeads = []
const inputEl = document.getElementById("input-el")
const tabBtn=document.getElementById("tab-btn")
const clearbtn = document.getElementById("clear-btn")
const inputbtn = document.getElementById("input-btn")
let ulEl = document.getElementById("ul-el")
let leadsFromLocal_stroage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocal_stroage) {
    myLeads = leadsFromLocal_stroage
    render(myLeads)
}

inputbtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)//This is help us to insert the searched item into myLeads array .
    inputEl.value = ""//clear the input field
    // Save myleads array to localstorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    //clearBtn()
})
tabBtn.addEventListener("click",function()
{
    //Get current url from chrome API
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    })
})

//we delete all the things by double click so that we use dbclick . 
clearbtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


function render(Leads) {
    let listItems = ""
    for (let i = 0; i < Leads.length; i++) {
        //<li> +myLeads[i]+</li> this was the first form
        //listItems+="<li> <a target='_blank' href='#'>"+myLeads[i]+"</a></li>"//taget='_blank open a new tab
        //We can write ${myLeads[i]} instead of +myLeads[i]+
        listItems +=
            `<li>
            <a target='_blank' href='${Leads[i]}'>
                ${Leads[i]}
            </a>
        </li > `
        //taget='_blank open a new tab

    }
    ulEl.innerHTML = listItems


}


