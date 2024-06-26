const choices=document.querySelectorAll(".choice");
const message=document.querySelector(".msg");
let usersc=document.querySelector("#us");
let compsc=document.querySelector("#cs");
let u=0;
let c=0;

const gencompchoice=()=>{
   const options=["rock","paper","scissors"];
   const ridx=Math.floor(Math.random()*3);
   return options[ridx];
};

const game=(userchoice)=>{
   const compchoice=gencompchoice();
   if(userchoice=="rock"){
     if(compchoice=="scissors"){
       win();
     }else if(compchoice=="paper"){
      loose();
     }else{
      draw();
     }
   }else if(userchoice=="paper"){
      if(compchoice=="scissors"){
         loose();
      }else if(compchoice=="rock"){
         win();
      }else{
         draw();
      }
   }else{
      if(compchoice=="rock"){
         loose();
      }else if(compchoice=="paper"){
         win();
      }else{
         draw();
      }
   }
   check();
};

const win=()=>{
   u+=1;
   usersc.innerText=u;
   message.innerText="You Won!";
   message.style.backgroundColor="green";
};
const loose=()=>{
   c+=1;
   compsc.innerText=c;
   message.innerText="Computer Won!";
   message.style.backgroundColor="red";
};
const draw=()=>{
   message.innerText="Draw Game- Play again";
   message.style.backgroundColor="black";
};

const check=()=>{
   if(u==10 || c==10){
      if(u==10){
         message.innerText="Game Over- You reached first 10 Start again";
         message.style.backgroundColor="blue";
      }else{
         message.innerText="Game Over- Computer reached first 10 Start again";
         message.style.backgroundColor="blue";
      }
      u=0;
      c=0;
      usersc.innerText=0;
      compsc.innerText=0;
   }
};

choices.forEach((choice)=>{
   choice.addEventListener("click",()=>{
      const userchoice=choice.getAttribute("id");
      game(userchoice);
   });
});

