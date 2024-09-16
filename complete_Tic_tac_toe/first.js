//selectors 
let boxes=document.querySelectorAll(".box");
let result=document.querySelector(".resulti");
let lost=document.querySelector(".lost");
let displayWinner=document.querySelector(".displayWinner")
let mainResult=document.querySelector(".displayResult");
let resetbtn=document.querySelector("#reset")
let newGamebtn=document.querySelector(".newGamebtn")
let showPname=document.querySelector(".hide")
let okbtn=document.querySelector(".ok")
//turn
let turn=true;
//winpattern
const winPattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn){
            turnf(turn);
            box.innerText="O"
            turn=false;
           }
           else{
            turnf(turn);
            box.innerText="X";
            turn=true;
           }
           box.disabled=true;
           checkWinner();
           checkLost();
    })

})

//functions section

function checkWinner(){
    for(let pattern of winPattern){
        let pos1value=boxes[pattern[0]].innerText;
        let pos2Value=boxes[pattern[1]].innerText;
        let pos3Value=boxes[pattern[2]].innerText;
        if(pos1value!=""&&pos2Value!=""&&pos3Value!=""){
            if(pos1value==pos2Value&&pos2Value==pos3Value){
                disabledBoxes();
                console.log("winner");
                showWinner(pos1value);
                
            }
        }
    }
    }
    function changeColor(){
        for(let pattern of winPattern){
            let pos1value=boxes[pattern[0]].innerText;
            let pos2Value=boxes[pattern[1]].innerText;
            let pos3Value=boxes[pattern[2]].innerText;
            
            if(pos1value!=""&&pos2Value!=""&&pos3Value!=""){
                if(pos1value==pos2Value&&pos2Value==pos3Value){
                  let place1=boxes[pattern[0]].style.backgroundColor="lightgreen";
                  let place2=boxes[pattern[1]].style.backgroundColor="lightgreen";
                  let place3=boxes[pattern[2]].style.backgroundColor="lightgreen";
                }

        }
    }
}


    function showWinner(pos1value){
        changeColor();
        console.log("winner");
    result.innerText="Congratulations Winner is"+pos1value;
    
   winnerName(pos1value);
   result.classList.remove("hidew");
    lost.classList.add("hidel");
    mainResult.innerText="winner is "+pos1value;
    mainResult.style.color=green;
    }
    
    const checkLost=()=>{
        let pos1value=boxes[0].innerText;
        let pos2value=boxes[1].innerText;
        let pos3value=boxes[2].innerText;
        let pos4value=boxes[3].innerText;
        let pos5value=boxes[4].innerText;
        let pos6value=boxes[5].innerText;
        let pos7value=boxes[6].innerText;
        let pos8value=boxes[7].innerText;
        let pos9value=boxes[8].innerText;
          if(pos1value!=""&&pos2value!=""&&pos3value!=""&&pos4value!=""&&pos5value!=""&&pos6value!=""&&pos7value!=""&&pos8value!=""&&pos9value!=""){
            console.log("you lost the game")
            showlost();
            disabledBoxes();

          }
        }



        const showlost=()=>{
            mainResult.innerText="Both Lost"
            lost.innerText="Match is Draw  Both Lost the game";
            lost.classList.remove("hidel");
            result.classList.add("hidew");
        }
        const disabledBoxes=()=>{
            for(let box of boxes){
              box.disabled=true;
            }
        }
        const enableBoxes=()=>{
            for(let box of boxes){
              box.disabled=false;
              box.style.backgroundColor="white";
            }
        }
         function reset(){
            enableBoxes();
            for(let box of boxes){
                box.innerText="";
            }
         }
        resetbtn.addEventListener("click",()=>{
            enableBoxes();
            for(let box of boxes){
                box.innerText="";
            }
        })
        newGamebtn.addEventListener("click",()=>{
        showPname.classList.remove("hide");
        reset();
        okbtn.addEventListener("click",()=>{
            playerName();
            showPname.classList.add("hide");
        })
            
        })
       
        function playerName(){
            let player1Name=document.querySelector("#inputName1").value;
            let player2Name=document.querySelector("#inputName2").value;
            let displayp1=document.querySelector("#displayName1")
            let displayp2=document.querySelector("#displayName2")
            displayp1.innerText="O. "+player1Name;
            displayp2.innerText="X. "+player2Name;
            turnbox.innerText="1. "+player1Name;
        }
   function turnf(turn){
    let player1Name=document.querySelector("#inputName1").value;
            let player2Name=document.querySelector("#inputName2").value;
            let turnni=document.querySelector(".displayTurn");
            if(turn){
                turnni.innerText=player1Name;
            }
            else{
                turnni.innerText=player2Name;
            }
   }
   function winnerName(pos1value){
    let player1Name=document.querySelector("#inputName1").value;
    let player2Name=document.querySelector("#inputName2").value;
    
        if(pos1value=="O"){
            displayWinner.innerText=player1Name; 
        }
        else{
            displayWinner.innerText=player2Name; 
        }

   }
   

