function sumar() {
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;
    let resultado;

    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    resultado = n1 + n2;

    let resul = document.getElementById('result');

    resul.innerHTML =
        `
    <h1 class="display-1 text-white">Resultado de la suma ${n1} + ${n2} =</h1>
    <h1 class="display-1 text-white">${resultado}</h1>
    `;
    alert("El resultado de la suma de " + n1 + "+" + n2 + "=" + resultado);
}


function restar() {
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;
    let resultado;

    resultado = n1 - n2;

    let resul = document.getElementById('result');

    resul.innerHTML =
        `
    <h1 class="display-1 text-white">Resultado de la resta ${n1} - ${n2} =</h1>
    <h1 class="display-1 text-white">${resultado}</h1>
    `;
    alert("El resultado de la resta de " + n1 + "-" + n2 + "=" + resultado);
}

function dividir() {
    let n2 = document.getElementById('num2').value;

    if (n2 == 0) {
        alert("no se puede divir");
    } else {
        alert("todo en orden");
    }
}