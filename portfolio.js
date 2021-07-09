
window.onload=function(){
    // request()
    //function createBurst(){
    //     let animContenair = document.querySelector('.animationContenair');
    //     let burst = document.querySelector('.burst');
    //     let lines = document.querySelectorAll('.line');
       
        
        
    //     burst.style.top = Math.random() * innerHeight + 'px';
    //     burst.style.left = Math.random() * innerWidth + 'px';

    //     lines.forEach((line)=>{
    //         const colors = ["#002548", "#fff", "#002548", "#fff","#002548", "#fff", "#002548", "#fff"];
    //         const randomColor = colors[Math.floor(Math.random() * colors.length)];
    //         line.style.background = randomColor;
    //     });

    //     let burstClone = burst.cloneNode(true);
    //     animContenair.appendChild(burstClone);

        // setTimeout(()=>{
        //     burstClone.remove();
        // }, 8000);

        

   // }
    setInterval(createBurst, 800); 


    const title = document.querySelector(".title");
    let ajout =title.innerHTML;

    console.log( typeof title)
    console.log( typeof ajout)
    let index = 0;
    
    const play = () => {
       title.innerHTML = ajout.slice(0, index);

       index++;

       if (index > title.length) {
           index = 0;
           clearInterval(timer)
       }
   };
   
   let timer = setInterval(play,50)


}

function request(){
    fetch("https://my-json-server.typicode.com/juniorMukala/Portfolio.json/identite")
    .then(function(response){
        return response.json()
    })
    .then((data) => {
        var maPresentation = document.getElementById('identite__nom')
        const image = document.getElementById('image')
        maPresentation.innerHTML =` <span>${data.nom}</span>` 
        image.src = data.image
        image.src = data.appelerImage
        const image2 = document.getElementById('image2')
        image2.src = data.image
        image2.src = data.appelerImage
    })
} 
request()


 


