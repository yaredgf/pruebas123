
const urlPag = "../IMG/Paginas/Pag"
const cantPag = 10;

function CambiarImg(num)
{
    const contenedor = document.getElementById('contenedorPag');
    //contenedor.getElementsByClassName('img-fluid')[0].attributes.src.value;

    contenedor.getElementsByClassName('img-fluid')[0].attributes.src.value= urlPag+num+'.png';
}





function CambiarContador(num)
{
    const contadorPagina = document.getElementById('contadorPagina');
    if((parseInt(contadorPagina.value)+ parseInt(num)>0)&&(parseInt(contadorPagina.value)+ parseInt(num)<=cantPag))
    {
        let contador =parseInt(contadorPagina.value)+ parseInt(num);
        contadorPagina.value = contador;
        CambiarImg(contador)
    }
    else if (num==0)
    {
        contadorPagina.value = cantPag;
        CambiarImg(cantPag)
    }
}



////////////////////////////////////////////////////////////////////////////////////////


let barraTiempo = document.getElementById('barraTiempo'); //input range
let audioContainer = document.getElementById('audio-container'); //contenedor
let audio = document.getElementById('audio'); // <audio>
let playBtn = document.getElementById('playBtn'); // playBtn





function PlayAudio()
{
    if(audio.paused)
    {
        audio.play();
        playBtn.src="../IMG/Recursos/IconPausa.svg"
    }
    else
    {
        audio.pause();
        playBtn.src="../IMG/Recursos/IconPlay.svg"
    }
}

function CambiarAudio()
{
    audio.currentTime=barraTiempo.value
}

function InicializarAudio()
{
    audio.load();
    barraTiempo.max=Math.ceil(audio.duration);
    barraTiempo.value=0;
    setTimeout(function() {
        barraTiempo.max=Math.ceil(audio.duration);
    },1000);
}


let segundoActual;
let checkAudio = setInterval(function() {
        if (segundoActual != audio.currentTime) 
        {
            segundoActual = audio.currentTime;
            barraTiempo.value= Math.ceil(audio.currentTime);
        } 
        else 
        {
          
        }
        if(audio.ended)
        {
            playBtn.src="../IMG/Recursos/IconPlay.svg";
        }
    }, 62);







addEventListener("load", () => {
    InicializarAudio();




});

document.getElementById("contadorPagina").addEventListener("input", (event) => CambiarContador(0));
document.getElementById("barraTiempo").addEventListener("input", (event) => CambiarContador(0));


