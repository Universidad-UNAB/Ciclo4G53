function Sumar() {
    var n1 = 0;
    var n2 = 0;
    var suma = 0;

    n1 = parseFloat(document.getElementById('numero1').value);
    n2 = parseFloat(document.getElementById('numero2').value);

    suma = n1 + n2;

    document.getElementById('resultado').value = suma;

}