let gameSeq=[];
let userSeq=[];

let btns =["yellow","red","purple","green"];

let started = false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function() {
    if(started == false) {
        console.log("game is started");
        started=true;

        levelup();
    }    
});

function levelup() {
    userSeq=[];
    level++;
    h2.innerText = "Level "+level;

    //random button choose
    let randIdx=Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randBtn);
}

function checkAns(idx) {
    if(userSeq[idx] == gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelup,1000);
        }
    } else {
        h2.innerHTML=`Game Over! Press any key to start.<br>Highest Level:${level}`;
        Document.querySelector("body").style.backgroundColor="red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor="white";
        },250);
        reset();
    }
}

function gameFlash(btn) {
    btn.classList.add("flash");    
    setTimeout(function() {
        btn.classList.remove("flash");
    },300);
}

function userFlash(btn) {
    btn.classList.add("userflash");    
    setTimeout(function() {
        btn.classList.remove("userflash");
    },200);
}

function btnPress() {
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function reset() {
    started=false;
        level=0;
        userSeq=[];
        gameSeq=[];
}