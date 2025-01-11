let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("h3");

let count = 0;// Count of filled boxes
let O = true;

const winPatterns = [
    [0,4,8],
    [2,4,6],
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

function button(changeText,val){
    boxes.forEach((box) =>{
        if(changeText){
            box.innerText = "";
            box.classList.remove("O");
            box.classList.remove("X");
        }
        box.disabled = val;
    });
}

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        count++;
        if(O){
            box.innerText = "O";
            box.classList.add("O");
        } else{
            box.innerText = "X";
            box.classList.add("X");
        }
        O = !O;
        box.disabled = true;
        check();
    });
});

let check = () => {
    let draw = true;
    winPatterns.forEach((pattern) => {
        if(boxes[pattern[0]].innerText != "" && boxes[pattern[0]].innerText === boxes[pattern[1]].innerText && boxes[pattern[0]].innerText === boxes[pattern[2]].innerText){
            draw = false;
            msg.innerHTML = `Congratulations, Winner is ${boxes[pattern[0]].innerText}`;
            button(false,true);
            msgContainer.classList.remove("hide");            
            resetBtn.classList.add("hide");
        }
    });
    if(draw && count == 9){
        msg.innerHTML = `Draw!`;
        msgContainer.classList.remove("hide");
        resetBtn.classList.add("hide");
    }
};

let reset = () => {
    count = 0;
    msgContainer.classList.add("hide");
    button(true,false);
};

newGameBtn.addEventListener("click" , () => {
    resetBtn.classList.remove("hide");
    reset();
});
resetBtn.addEventListener("click" , reset);