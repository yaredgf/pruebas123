const sopa = ["P","J","C","Y","H","D","R","S","R","M","M","C","T","O","B","U","B","B","I","P","Y","A","C","I","C","O","M","J","A","S","B","C","R","V","N","O","C","E","E","R","E","O","A","D","A","T","D","A","D","M","R","O","R","R","W","S","E","R","S","A","U","O","X","U","D","X","I","C","I","I","L","R","G","O","C","U","A","J","O","L","E","S","I","N","L","A","M","C","A","R","O","R","N","C","G","O","Z","E","L","L","A","N","P","M","E","P","R","U","N","N","B","L","N","E","E","E","R","A","N","A","J"]
const palabras = ["Barro","Cardumen","Rana","Cocodrilo","Siseo","Mar","Coral","Murice","Lora","Humedal","Tinte","Boruca","BocaSierpe","Vasija"];
const palabrasL = ["Murice","Lora","Humedal","Tinte","Boruca","Boca Sierpe","Vasija"];
const palabrasR = ["Barro","Cardumen","Rana","Cocodrilo","Siseo","Mar","Coral"];
var mouseState = false;
function handleMouseDown(){
    mouseState=true
}
function handleMouseUp(){
    mouseState=false
    palabraEncontrada(ids)
    if(palabras.length===0){
        alert("ganaste")
    }
    console.log(palabras)
}
function handleLoad(){
    var tabla = document.getElementById("sopaLetras");
    var palabrasRE = document.getElementById("palabrasR");
    var palabrasLE = document.getElementById("palabrasL");
    var innerHTMLL=""
    var innerHTMLRE=""
    var innerHTMLLE=""
    for(var i =0;i<sopa.length;i++)
    {
        if(i%11==0){    
            innerHTMLL+="<tr class='tRow'>"
            for(var j =i;j<i+11;j++)
            {
                innerHTMLL+="<td class='tElement' id='"+sopa[j]+j+"' onmousemove='hover("+sopa[j]+j+")' >"+sopa[j]+"</td>"
            }
            innerHTMLL+="</tr>"
        }
    }
    for(var i = 0;i<palabrasL.length;i++)
    {
        innerHTMLLE+="<span id='"+palabrasL[i].toLowerCase().trim().replace(" ", "")+"'>"+palabrasL[i]+"</span>"
    }
    for(var i = 0;i<palabrasR.length;i++)
    {
        innerHTMLRE+="<span id='"+palabrasR[i].toLowerCase().trim()+"'>"+palabrasR[i]+"</span>"
    }
    palabrasLE.innerHTML=innerHTMLLE;
    palabrasRE.innerHTML=innerHTMLRE;
    tabla.innerHTML=innerHTMLL;
}
var letrasObtenidas=""
var ids=[];
const voidS=[];
function simplifyPalabra() 
{    
    var palabra=""
    for(i = 0; i<letrasObtenidas.length;i++){
        var a1=letrasObtenidas.charAt(i);
        var a2=letrasObtenidas.charAt(i+1);
        if(a1===a2)
        {
            if(palabra.endsWith(letrasObtenidas.toString().charAt(i))){
                continue
            }
            else
                palabra+=letrasObtenidas.toString().charAt(i)
        }
    }
    if(palabra.toString().trim().toLowerCase()=="baro")
    {
        palabra="barro"
    }
    return palabra
}
function palabraEncontrada(idLetra){
    const dataArr = new Set(idLetra);
    let result = [...dataArr];
    var palabra = simplifyPalabra()
    console.log(palabra)
    for(i=0;i<palabras.length;i++)
    {
        if(palabra.toString().trim().toUpperCase()==palabras[i].toString().trim().toUpperCase())
        {
            document.getElementById(palabra.toLowerCase().trim()).style.textDecoration="line-through";
            for(j=0;j<result.length;j++)
            {
                document.getElementById(result[j]).className="selected"
                for (let l = 0; l < palabras.length; l++) {
                    if (palabras[l].toString().trim().toUpperCase() === palabra.toString().trim().toUpperCase()) {
                        palabras.splice(l, 1);
                    }
                }
            }
        }
    }
}
function hover(id){
    if(mouseState){
        id.style.backgroundColor="red"
        letrasObtenidas+=id.innerText
        ids[ids.length]=id.id
    }
    else{
        var elements = document.getElementsByClassName("tElement")
        for(i=0;i<elements.length;i++){
            elements[i].style.backgroundColor="white"
        }
        while(ids.length){
            ids.pop()
        }
        letrasObtenidas=""
    }
}
