
button = document.querySelectorAll("button")
output = document.querySelector(".output")
let userScore=0, computerScore=0
let tossArray = ["Tail", "Head"]
for(b of button){
   b.addEventListener("click",flipCoin)
}

function flipCoin(e){
    let tossResult = tossArray[parseInt(Math.random()*2)]  //head, tail
    console.log(tossResult)
    userChoice = (e.target.innerHTML).trim()
    
     winMessage = ""
    if(tossResult == userChoice){
        winMessage = "You won"
        userScore++
    }
    else{
        winMessage = "You Loss"
        computerScore++
    }
    output.innerHTML = `<pre> UserScore = ${userScore}        ComputerScore = ${computerScore} </pre>
                                              ${winMessage}`
    
    
}