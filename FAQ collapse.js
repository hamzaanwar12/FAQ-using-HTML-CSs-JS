let down = Array.from(document.querySelectorAll(".down"))
let cancel = Array.from(document.querySelectorAll(".cancel"))
let span = Array.from(document.querySelectorAll("span"))
let question =  Array.from(document.querySelectorAll(".question"))

console.log(down)
console.log(cancel)
console.log(span)
console.log(question)

for(let i=0;i<down.length;i++)
{
    down[i].addEventListener("click",()=>
    {
        question[i].classList.add("questionActive")
        down[i].classList.add("downInactive")
        cancel[i].classList.add("cancelActive")
        setTimeout(() => {
            span[i].classList.add("spanActive")
        }, 0350); 

    })

    cancel[i].addEventListener("click",()=>
    {

        down[i].classList.remove("downInactive")
        cancel[i].classList.remove("cancelActive")  
        // span[i].classList.add("spaninactive")
        setTimeout(() => {
            span[i].classList.remove("spanActive")
            question[i].classList.add("questionInActive")
        }, 0350); 

    })


}

