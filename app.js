let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgCntr = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerY

let winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

boxes.forEach(function(box) {
    box.addEventListener("click" , function() {  //so added eventlistner to all boxes , and whenever any box is clicked the eventlistener's callback will run
        // console.log("box was clicked!");  //example of we learned ,dynamically we can change HTML,css through JS
        if(turnO == true) {
            turnO = false;
            box.style.color = "#445E93";   //we know whatever JS add styling dynamically it is inline styling,   usi tag me dikhaye deti html me
            box.innerText = "O";
        } else {
            turnO = true;
            box.style.color = "#F26157";
            box.innerText = "X";
        }
        box.disabled = true;

        checkWinner();
    })
});

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {   //winner condition 
                disableBoxes();
                showWinner(pos1Val);             
            }
        }
    }
}

const showWinner = (winner) => { 
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgCntr.classList.remove("hide");
}

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgCntr.classList.add("hide");
}

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);
