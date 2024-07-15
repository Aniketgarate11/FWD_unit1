const containerEl = document.querySelector(".container");

const carrers = ["WEB-DEVELOPER","EMPLOYE","STUDENT"];

carrerIndex = 0 ;

carrerInOFIndex = 0 ;

updateText();

function updateText(){
    carrerInOFIndex++;
    containerEl.innerHTML =`<h2> I AM A ${carrers[carrerIndex].slice(0,carrerInOFIndex)}</h2>`;
    if(carrerInOFIndex === carrers[carrerIndex].length){
        carrerIndex++;  
        carrerInOFIndex = 0;
    }

    if(carrerIndex === carrers.length){
        carrerIndex=0; 
    }
    setTimeout(updateText,300);
}
