// Estado inicial de la página
let texto = '';
limparEncriptacion();
function limparEncriptacion() {
    let elementosVacios = document.getElementsByClassName('resultado__vacio');
    let elementosSalida = document.getElementsByClassName('resultado__salida');
    for (let i = 0; i < elementosVacios.length; i++) {
        elementosVacios[i].removeAttribute('hidden');
    }
    for (let i = 0; i < elementosSalida.length; i++) {
        elementosSalida[i].setAttribute('hidden', true);
    }
    //document.getElementById('limpiainador').setAttribute();
}

// Funcion generica para insertar un texto dado en determinado elemento
function insertarTextoEnElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

/*
    Funcion para encriptar el mensaje de enetrada
    La letra "a" es convertida para "ai"
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
*/
function encriptainador() {
    let textoUsuario = document.getElementById('textoUsuario').value;
    textoUsuario = textoUsuario;
    if (textoUsuario !== '') {
        let salida = '';
        for (caracter of textoUsuario) {
            switch (caracter.toLowerCase()) {
                case 'a':
                    salida += caracter + 'i';
                    break;
                case 'e':
                    salida += caracter + 'nter';
                    break;
                case 'i':
                    salida += caracter + 'mes';
                    break;
                case 'o':
                    salida += caracter + 'ber';
                    break;
                case 'u':
                    salida += caracter + 'fat';
                    break;
                default:
                    salida += caracter;
                    break;
            }
        }
        texto = salida;
        mostrarEncriptacion(salida);
    }
    return;
}

function limpiainador() {
    document.getElementById('textoUsuario').value = '';
}

// Funcion para desencriptar el mensaje de enetrada
function desencriptainador() {
    let textoUsuario = document.getElementById('textoUsuario').value;
    if (textoUsuario !== '') {
        let salida = '';
        for (let i = 0; i < textoUsuario.length; i++) {
            let caracter = textoUsuario[i];
            salida += caracter;
            switch (caracter.toLowerCase()) {
                case 'a':
                    i += 1;
                    break;
                case 'e':
                    i += 4;
                    break;
                case 'i':
                case 'o':
                case 'u':
                    i += 3;
                    break;
            }
        }
        texto = salida;
        mostrarEncriptacion(salida);
    }
    return;
}

//Muestra el resultado de la encriptacion
function mostrarEncriptacion(texto) {
    let elementosVacios = document.getElementsByClassName('resultado__vacio');
    let elementosSalida = document.getElementsByClassName('resultado__salida');
    for (let i = 0; i < elementosVacios.length; i++) {
        elementosVacios[i].setAttribute('hidden', true);
    }
    for (let i = 0; i < elementosSalida.length; i++) {
        mi = elementosSalida[i].removeAttribute("hidden");
    }
    insertarTextoEnElemento('.resultado__salida__texto', texto);
}

// Funcion de copiar salida
function copiarEncriptada() {
    navigator.clipboard.writeText(texto);
}