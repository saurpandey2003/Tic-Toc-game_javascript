console.log("Welcome to TicToc game");
let music = new Audio("./music.mp3")
let turnaudio = new Audio("./ting.mp3")
let gameover = new Audio("./gameover.mp3");
let wonimg=document.getElementById('wonimg');
let reset=document.getElementById('reset');
let isgameover=false;

let turn = "X";

// function to change the turn
let changeTurn = () => {
    return turn == "X" ? "0" : "X";
}
// functiom to check for a win
let checkwin = () => {
    let bxt=document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],
    ]
    wins.forEach(e=>{
        if((bxt[e[0]].innerText===bxt[e[1]].innerText)&&(bxt[e[2]].innerText===bxt[e[1]].innerText) &&(bxt[e[0]].innerText!=="")){
        document.querySelector('.info').innerText=bxt[e[0]].innerText+" won ";
        isgameover=true;
        wonimg.style.opacity=1;
        gameover.play(); 
        }

    })
}
// Game logic
let box = document.getElementsByClassName("boxes");
Array.from(box).forEach(Element => {
    let boxtext = Element.querySelector('.boxtext');
    Element.addEventListener('click', () => {
        if (boxtext.innerText == '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            turnaudio.play();
            checkwin();
            if(!isgameover)
            document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;

        }
    })
})
reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(Element=>{
        Element.innerText=""
    })
})