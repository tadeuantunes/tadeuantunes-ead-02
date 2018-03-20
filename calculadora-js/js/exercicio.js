function calculadora() {
  var valor1 = parseInt(prompt('Informe um valor: '));
  var valor2 = parseInt(prompt('Informe outro valor: '));
  alert('A + B: ' + (valor1 + valor2) + '\n'+
        'A - B: ' + (valor1 - valor2) + '\n' +
        'A x B: ' + (valor1 * valor2) + '\n' +
        'A / B: ' + (valor1 / valor2) + '\n');
}