function dado() {
    const numero1 = +document.querySelector('#num1').value;
    const numero2 = +document.querySelector('#num2').value;

   
    const operacion = Math.round(Math.random() * (numero1 - numero2)) + numero2;


    document.querySelector('#salida').textContent = operacion;
}

