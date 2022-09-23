console.log("Welcome to Tik Tak Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")

const changeTurn = ()=>{
    return turn === "X"?"0": "X"
}

const checkWin = ()=>{

}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = document.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            changeTurn();
            audioTurn.play();
            checkWin();
            document.getElementsByClassName("info") [0].innerText = "Turn for " + turn;
        }
    })
})