

document.addEventListener("DOMContentLoaded", init)

function init(){
    const counter = document.querySelector("#counter")
    const minus = document.querySelector("#minus")
    const plus = document.querySelector("#plus")
    const heart = document.querySelector("#heart")
    const input = document.querySelector("#comment-input")
    const form = document.querySelector("#comment-form")
    const controlButton = document.querySelector("#pause")
    let heartClickTimes = 0
    //let li
    
    setInterval(() => {
        if (controlButton.textContent === " pause ") {
            newNum = parseInt(counter.textContent) + 1
            counter.textContent = newNum
            heartClickTimes = 0
            //li = document.createElement("li")
            //li.setAttribute("data-num", `${counter.textContent}`)
        } 
    }, 1000) 

    
    //resume/pause button function:
    controlButton.addEventListener("click", controlPage)
    function controlPage(){
        if (controlButton.textContent === " pause ") {
            controlButton.textContent = " resume "
            minus.setAttribute("disabled", "")
            plus.setAttribute("disabled", "")
            heart.setAttribute("disabled", "")
        }else if (controlButton.textContent === " resume "){
            controlButton.textContent = " pause "
            minus.removeAttribute("disabled")
            plus.removeAttribute("disabled")
            heart.removeAttribute("disabled")
        }
    }

    //minus & plus button function
    minus.addEventListener("click", counterReduction)
    function counterReduction(){
        counter.textContent -= 1
    }
    plus.addEventListener("click", counterAddition)
    function counterAddition(){
        const newNum = parseInt(counter.textContent) + 1
        counter.textContent = newNum
    }

    //heart button function
    
    heart.addEventListener("click", heartNote)
    function heartNote(){
       
        //-----------------------------------------------
        const li = document.createElement("li")
        let time = "time"
        li.setAttribute("data-num", `${counter.textContent}`)
        const likes = [...document.querySelectorAll("ul.likes li")]
        
        const likeDisplay = likes.find(element => {
            return (parseInt(element.dataset.num) == parseInt(li.dataset.num))
        })
        if (likeDisplay !== undefined) {
            likeDisplay.querySelector("span#clickTimes").textContent = parseInt(likeDisplay
                .querySelector("span").textContent) + 1
                likeDisplay.querySelector("span#time").textContent = "times"
        }else if (likeDisplay == undefined) {
            li.innerHTML = `${li.dataset.num} has been liked <span id="clickTimes">1</span> 
            <span id="time">time</span>`
            document.querySelector("ul.likes").appendChild(li)
            likes.push(li)
        }

    }
    
    //comment section
    form.addEventListener("submit", addComment)
    function addComment(eventObject){
        eventObject.preventDefault()
        const p = document.createElement("p")
        p.textContent = input.value
        document.querySelector("#list").appendChild(p)
    }


}


