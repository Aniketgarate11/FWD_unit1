const bodyEl = document.querySelector("body");
bodyEl.addEventListener("mousemove",(e)=>{


    // const xpos = e.offsetX;
    // const ypos = e.offsetY;
    //Use clientX and clientY for absolute positioning: Since offsetX and offsetY are relative
    const xpos = e.clientX;
    const ypos = e.clientY;
    const spanEl = document.createElement("span");

    spanEl.style.left = xpos + "px";
    spanEl.style.top = ypos + "px";

    const size = Math.random()*100;
    spanEl.style.width = size +  "px";
    spanEl.style.height = size +  "px";

    bodyEl.appendChild(spanEl)
    setTimeout(()=>{
        spanEl.remove();
    },3000)
})