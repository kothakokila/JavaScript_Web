let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".rst-btn");
let newbtn=document.querySelector(".new");
let msg=document.querySelector("#ms");
let msgcont=document.querySelector(".winmsg");
let turnO=true;
let c=0;
console.log("hi");

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;  
          }else{
            box.innerText="X";
            turnO=true;  
          } 
          box.disabled=true;
          c++;
          let winner=checkwinner();
          if(c===9 && !winner){
            drawgame();
          }
});
});

const checkwinner=()=>{
    for(let pattern of winPatterns){
       let val1= boxes[pattern[0]].innerText;
       let val2= boxes[pattern[1]].innerText;
       let val3= boxes[pattern[2]].innerText;
       if(val1 != "" && val2 != "" && val3 != ""){
       if(val1===val2 && val2===val3){
          showwinner(val1);
          return true;
       }
    }
    }
};

const showwinner=(winner)=>{
     msg.innerText=`Game Over- Congratulations, Winner is ${winner}`;
     msgcont.classList.remove("hide");
     disableBoxes();
};
const drawgame=()=>{
    msg.innerText=`Draw Game`;
    msgcont.classList.remove("hide"); 
    disableBoxes();
};

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

resetbtn.addEventListener("click", ()=>{
    turn0=true;
    c=0;
    enableBoxes();
    msgcont.classList.add("hide");
});
newbtn.addEventListener("click", ()=>{
    turn0=true;
    c=0;
    enableBoxes();
    msgcont.classList.add("hide");
});
