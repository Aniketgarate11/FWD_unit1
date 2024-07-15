const imgcontainer = document.querySelector('.imgcontainer');
const btnEl = document.querySelector('.btn')

btnEl.addEventListener("click",()=>{
    imgNumber = 4;
    addNewImages();
})


function addNewImages(){
   for(let i =0 ; i < imgNumber ; i++){
    
       let imgEl = document.createElement('img')
       imgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*1000)}`;
   
       imgcontainer.appendChild(imgEl);
   }
    

}