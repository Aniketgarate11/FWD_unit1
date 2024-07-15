const btnEl = document.getElementById("btn");

btnEl.addEventListener("mousemove", (e) => {
    // const X = e.pageX - btnEl.offsetLeft;
    // const Y = e.pageY - btnEl.offsetTop;

    const X = e.offsetX;
    const Y = e.offsetY;

    console.log(X,Y);
    

    btnEl.style.setProperty("--xPos", X + "px");
    btnEl.style.setProperty("--yPos", Y + "px");
});