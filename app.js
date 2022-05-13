const contenedorQR = document.getElementById('QRcode');
const formulario = document.getElementById('formulario');
const boton = document.getElementById('boton');
const input = document.getElementById('input');

const codigoQR = new QRCode(contenedorQR);


boton.addEventListener("click", (e) => {
    const valor = input.value
    e.preventDefault();
    codigoQR.makeCode(valor);
})