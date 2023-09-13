const color=document.querySelector(".container")

function getcolor(){
    const getrandom= Math.floor(Math.random()*16777215)
    const getrandomcolor="#"+getrandom.toString(16)
    document.body.style.backgroundColor=getrandomcolor
    document.querySelector(".click").style.backgroundColor=getrandomcolor
    const hh=document.querySelector("h2")
    hh.innerHTML=getrandomcolor
function copyclipboard()   {

    navigator.clipboard.writeText(hh.innerHTML)

}

    document.querySelector(".copy").addEventListener("click", function(){
copyclipboard()
    })
    color.addEventListener("click",()=>{
        color.style.backgroundColor=getrandomcolor
    })
    
}
document.querySelector(".click").addEventListener("click",getcolor)
getcolor()

