const containerEl=document.querySelector(".container");
const careers=["Hello EveryNyan","How are you?","Fine! Thank you","Oh my gah","I wish I were a bird"];
const anime1El=document.querySelector(".anime1");
const anime2El=document.querySelector(".anime2");
let careersIndex=0;
let charIndex=0;
updateText();

function updateText(){
    
    containerEl.innerHTML= `<h1>${careers[careersIndex].slice(0,charIndex)}</h1>`;
    charIndex++; 
if(charIndex===careers[careersIndex].length+1){
anime1El.style.padding="0px";
}
    if(charIndex===careers[careersIndex].length+1){
        careersIndex++;
        charIndex=0;
        anime1El.style.padding="0px";
    }
    if(careersIndex===careers.length){
    careersIndex=0;
    charIndex=0;
    }
    anime2El.style.padding="0";
    anime1El.style.padding="0";
    if(careersIndex==3){
        anime2El.style.padding="20px";
    }
    else if(careersIndex==0)
    anime1El.style.padding="0";
    else{
        anime1El.style.padding="20px";
    }
    setTimeout(updateText,100);
    
}
