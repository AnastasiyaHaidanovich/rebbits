'use strict';

const arrows = document.querySelectorAll(".arrow");
const square = document.querySelector(".square-body");
square.addEventListener('click', (e) => {
    if(e.target.closest(".left")){
        let currentBlock = e.target.closest(".block");
        let currentBlockNum = currentBlock.querySelector(".block-number");
        let neighbourBlock = currentBlock.previousElementSibling;
        if (neighbourBlock !== null){
            let neighbourBlockNum = neighbourBlock.querySelector(".block-number");
            let neibChange = neighbourBlockNum.textContent;
            let currChange = currentBlockNum.textContent;

            currentBlockNum.innerText = neibChange;
            neighbourBlockNum.innerText = currChange; 
        }
    } else if(e.target.closest(".right")){
        let currentBlock = e.target.closest(".block");
        let currentBlockNum = currentBlock.querySelector(".block-number");
        let neighbourBlock = currentBlock.nextElementSibling;
        if (neighbourBlock !== null){
            let neighbourBlockNum = neighbourBlock.querySelector(".block-number");
            let neibChange = neighbourBlockNum.textContent;
            let currChange = currentBlockNum.textContent;

            currentBlockNum.innerText = neibChange;
            neighbourBlockNum.innerText = currChange; 
        }
    } else if(e.target.closest(".bottom")){
        let currentBlock = e.target.closest(".block");
        let currentBlockNum = currentBlock.querySelector(".block-number");
        let neighbourBlock = currentBlock.nextElementSibling;
        for (let i = 1; i <= 4; i++){
            if (neighbourBlock !== null){
               neighbourBlock = neighbourBlock.nextElementSibling; 
            }
        }
        
        if (neighbourBlock !== null){
            let neighbourBlockNum = neighbourBlock.querySelector(".block-number");
            let neibChange = neighbourBlockNum.textContent;
            let currChange = currentBlockNum.textContent;

            currentBlockNum.innerText = neibChange;
            neighbourBlockNum.innerText = currChange; 
        }
    } else if(e.target.closest(".top")){
        let currentBlock = e.target.closest(".block");
        let currentBlockNum = currentBlock.querySelector(".block-number");
        let neighbourBlock = currentBlock.previousElementSibling;
        for (let i = 1; i <= 4; i++){
            if (neighbourBlock !== null){
               neighbourBlock = neighbourBlock.previousElementSibling; 
            }
        }
        
        if (neighbourBlock !== null){
            let neighbourBlockNum = neighbourBlock.querySelector(".block-number");
            let neibChange = neighbourBlockNum.textContent;
            let currChange = currentBlockNum.textContent;

            currentBlockNum.innerText = neibChange;
            neighbourBlockNum.innerText = currChange; 
        }
    }    
});