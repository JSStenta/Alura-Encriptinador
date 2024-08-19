let texto = '';
limparEncriptacion();

function insertarTextoEnElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

/*
    La letra "a" es convertida para "ai"
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
*/
function encriptainador() {
    let textoUsuario = document.getElementById('textoUsuario').value;
    textoUsuario = textoUsuario.toLowerCase();
    let salida = '';
    for (caracter of textoUsuario) {
        switch (caracter) {
            case 'a':
                salida += 'ai';
                break;
            case 'e':
                salida += 'enter';
                break;
            case 'i':
                salida += 'imes';
                break;
            case 'o':
                salida += 'ober';
                break;
            case 'u':
                salida += 'ufat';
                break;
            default:
                salida += caracter;
                break;
        }
    }
    texto = salida;
    mostrarEncriptacion(salida);
    return;
}

function desencriptainador() {
    let textoUsuario = document.getElementById('textoUsuario').value;
    textoUsuario = textoUsuario.toLowerCase();
    let salida = '';
    for (let i = 0; i < textoUsuario.length; i++) {
        let caracter = textoUsuario[i];
        salida += caracter;
        switch (caracter) {
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
    return;
}

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

function copiarEncriptada() {
    navigator.clipboard.writeText(texto);
}

function limparEncriptacion() {
    let elementosVacios = document.getElementsByClassName('resultado__vacio');
    let elementosSalida = document.getElementsByClassName('resultado__salida');
    for (let i = 0; i < elementosVacios.length; i++) {
        elementosVacios[i].removeAttribute('hidden');
    }
    for (let i = 0; i < elementosSalida.length; i++) {
        elementosSalida[i].setAttribute('hidden', true);
    }
}