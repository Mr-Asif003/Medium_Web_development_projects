let rock=document.querySelector(".imgrock");
let paper=document.querySelector(".imgpaper");
let scissor=document.querySelector(".imgscissor");
let startimgu=document.querySelector(".startu")
let rocku=document.querySelector(".rocku")
let paperu=document.querySelector(".paperu")
let scissoru=document.querySelector(".scissoru")
let result=document.querySelector(".res");
let uscore=document.querySelector(".us");
let cscore=document.querySelector(".cs");

//computer
let crock=document.querySelector(".imgrockc");
let cpaper=document.querySelector(".imgpaperc");
let cscissor=document.querySelector(".imgscissorc");
let cstartimgu=document.querySelector(".startc")
let crocku=document.querySelector(".rockc")
let cpaperu=document.querySelector(".paperc")
let cscissoru=document.querySelector(".scissorc")
let comimgalls=document.querySelector(".ac");
let run;
let pun;
let sun;
let comScore=0;
let userScore=0;
// img event

rock.addEventListener("click",()=>{
    addanimation();
   run=1;
    console.log("rock")
startimgu.classList.add("hidest");
rocku.classList.remove("hider")
paperu.classList.add("hidep")
scissoru.classList.add("hides")

setTimeout(()=>{
    let cno=comResult();
    compicChange(cno);
if(cno==run){
result.innerText="Match draw"
}
if(cno==2){
    result.innerText="comp win"
    comScore++;
    cscore.innerText=comScore;
}
if(cno==3){
    result.innerText="user win"
    userScore++;
    uscore.innerText=userScore;
}

},2000);

})
paper.addEventListener("click",()=>{
  addanimation();
    pun=2;
    console.log("rock")
startimgu.classList.add("hidest");
rocku.classList.add("hider")
paperu.classList.remove("hidep")
scissoru.classList.add("hides")
setTimeout(()=>{
    let cno=comResult();
    compicChange(cno)
 if(cno==pun){
 result.innerText="Match draw"
 }
 if(cno==3){
     result.innerText="comp win"
     comScore++;
     cscore.innerText=comScore;
 }
 if(cno==1){
     result.innerText="user win"
     userScore++;
     uscore.innerText=userScore;
 }

},2000)
})


scissor.addEventListener("click",()=>{
    addanimation();
    sun=3;
    console.log("rock")
startimgu.classList.add("hidest");
scissoru.classList.remove("hides")
rocku.classList.add("hider")
paperu.classList.add("hidep")

setTimeout(()=>{
    let cno=comResult();
    compicChange(cno)
    
    if(cno==2){
        result.innerText="user win"
        userScore++;
        uscore.innerText=userScore;
    }
    else{
        result.innerText="comp win"
        comScore++;
        cscore.innerText=comScore;
    }
  
},2000)

})



function comResult(){
    let cno=Math.floor(Math.random()*3)+1;
    console.log(cno);
    return cno;
}
function compicChange(cno){
   
 if(cno===1){
    cstartimgu.classList.add("hidestc");
crocku.classList.remove("hiderc")
cpaperu.classList.add("hidepc")
cscissoru.classList.add("hidesc")

 }
 if(cno===2){
    cstartimgu.classList.add("hidestc");
    crocku.classList.add("hiderc")
    cpaperu.classList.remove("hidepc")
    cscissoru.classList.add("hidesc")
  
 }
 if(cno===3){
    cstartimgu.classList.add("hidestc");
    cscissoru.classList.remove("hidesc")
    crocku.classList.add("hiderc")
    cpaperu.classList.add("hidepc")
  
 }

 
}
function addanimation(){
comimgalls.classList.add("c");
}
function removeanimation(){
    comimgalls.classList.remove("c");
}
