document.addEventListener('click',function(e){
    let body = document.querySelector('body');
    let disparo = document.createElement('span');//crear elemento span
    disparo.classList.add('disparo');//crear la clase disparo
    let x = e.offsetX;
    let y = e.offsetY;
    disparo.style.left = x+'px';
    disparo.style.top = y+'px';
    body.appendChild(disparo);

    
    ///sonido disparo click
    let sound = document.getElementById('audio');
    sound.play();
    ///  la sangre  el mole doña maria // screen after click
    //// add ramdom sangre imagen
    let imagenes =[
        'url("mole.png")',
        'url("mole2.png")',
        'url("mole3.png")',
    ]

    let sangre = document.createElement('span');
    sangre.classList.add('sangre');
    
    let bg = imagenes[Math.floor(Math.random()*imagenes.length)];
    sangre.style.backgroundImage = bg;

    sangre.style.left = Math.random()*innerWidth +'px';
    sangre.style.top = Math.random() *innerHeight +'px';
    body.appendChild(sangre);


    //remover clase  disparo  y sangre 4 segundo 

    setTimeout(function(){
        disparo.remove();
        sangre.remove();
        },4000);//sugundos 
        

})




