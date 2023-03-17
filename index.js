// Your Code Here
function start() {
    let answer = window.prompt('Do you head left, or right?')
    console.log(answer)
    if (answer ==='left') {
        answerNo1()
    }else if (answer === 'right') {
        answerNo2()
    }

}



function answerNo1(){
    let firstAnswer = window.prompt('Dou you like regueeton. Yes or No?')
    console.log(firstAnswer)
    if (firstAnswer === 'Yes'){
        let yess = window.prompt('you suck')
    }else if (firstAnswer === 'No'){
        let naaa = window.prompt('you rock')
    }
}




function answerNo2() {
    let secondAnswer = window.prompt('Would you rather eat Pizza or Burger? ')
console.log(secondAnswer)
if (secondAnswer === 'Pizza'){
    let xdxd = window.prompt('nomo')
}else if (secondAnswer === 'Burger or burger'){
    let third = window.prompt('Mind')
}
}




start()