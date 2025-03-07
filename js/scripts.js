document.addEventListener('DOMContentLoaded', () => {
    //Obtemenos la imagen
    const imagenHero = document.querySelector('.hero');

   
    let i = 0;
    let tiempo = 0;

   
    const imagenes = ['arriba2.jpg', 'arriba.jpg'];

    setInterval( () => {
        
        if(tiempo > 80){
            tiempo=0;
            imagenHero.style.backgroundImage = "url(img/"+imagenes[i]+")";
            if(i === imagenes.length -1){
                i = 0;
            }
            else{
                i++;
            }
            console.log(i);
        }
        
        tiempo++;
        
    },150)
    
})