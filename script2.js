let textArea = document.querySelector('.text-area').value;
const mensaje = document.querySelector(".mensaje");

const $content = document.getElementById('textArea'),
$btncopiar = document.getElementById('btn-copiar');

console.log(`El texto encriptado es: ${textArea}`);

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

//ENCRIPTAR
function btnEncriptar(){
    
        textArea = document.querySelector('.text-area').value; /*aqui hay que asignar nuevamente el valor, ya que es posteir a la inicialización que escribes el mensaje*/
        const textoEncriptado = encriptar(textArea);
        //console.log(`El texto encriptado es: ${textArea}`);
        //alert("Valor a encriptar: " + textArea);
        //alert ("Texto: " + textoEncriptado.value);
        //mensaje.value = textoEncriptado
        //textArea.value = "";
        
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
       for(let i = 0; i < matrizCodigo.length; i++){
      //  alert("Valor: " + matrizCodigo[i][0]);
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    mensaje.value = stringEncriptada;
    mensaje.style.backgroundImage = "none";
    return stringEncriptada;
}

function desencriptar(stringDesencriptada){
   mensaje.value = textArea.value;
    //mensaje.value = stringDesencriptada;
    mensaje.style.backgroundImage = "none";
    return stringDesencriptada;
}

    
function btnDesencriptar(){
    //const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textArea;
    textArea.value = "";
    
}

function btnCopiar(){
   
    btnCopiar.addEventListener('click', e =>{
        $content.select();
        document.execCommand('copy');
    })
}

