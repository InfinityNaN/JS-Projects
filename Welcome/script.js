// queryselector, addeventlistener, innertext, innerHTml

let button1 = document.querySelector("button")
let input1 = document.querySelector("input")
let output1 = document.querySelector(".output")

const showMessage=()=>{
    output1.innerText = `Welcome ${input1.value} to the javascript team`
}
button1.addEventListener("click",showMessage)

