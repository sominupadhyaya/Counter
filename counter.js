const scoreboardControlOne = document.querySelector('.scoreboard-control-button-1')
const scoreboardControlTwo = document.querySelector('.scoreboard-control-button-2')
const scoreboardControlThree = document.querySelector('.scoreboard-control-button-3')
const scoreboardControlFour = document.querySelector('.scoreboard-control-button-4')
const scoreBoardScoreOne = document.querySelector('.scoreboard-score-1')
const scoreBoardScoreTwo = document.querySelector('.scoreboard-score-2')

let count1 = 0
let count2 = 0


scoreboardControlOne.addEventListener('click' , () =>{
    count1++
    scoreBoardScoreOne.textContent = count1
})

scoreboardControlTwo.addEventListener('click' , () =>{
    count1--
    scoreBoardScoreOne.textContent = count1
})
scoreboardControlThree.addEventListener('click' , () =>{
    count2++
    scoreBoardScoreTwo.textContent = count2
})

scoreboardControlFour.addEventListener('click' , () =>{
    count2--
    scoreBoardScoreTwo.textContent = count2
})
