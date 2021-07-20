(function (win, doc) {
  'use-strict'

  /*
  Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
  As regras são:

  - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
  diretamente;
  - O input deve iniciar com valor zero;
  - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
  - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
  multiplicação(x) e divisão(÷);
  - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
  que irá limpar o input, deixando-o com valor 0;

  - A cada número pressionado, o input deve atualizar concatenando cada valor
  digitado, como em uma calculadora real;
  - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
  operação no input. Se o último caractere no input já for um símbolo de alguma
  operação, esse caractere deve ser substituído pelo último pressionado.
  Exemplo:
  - Se o input tem os valores: "1+2+", e for pressionado o botão de
  multiplicação (x), então no input deve aparecer "1+2x".
  - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
  input;
  - Ao pressionar o botão "CE", o input deve ficar zerado.
  */

  // todo ação p/ acada botão
  // todo funções com as ações de cada botão
  // todo funções com as ações de cada botão
  /*
  * objetivo:
  * cada operador deve realizar sua designada função
  *
  *
  * botão igual deve mostrar o resultado
  *
  */

  var $displayCalculator = doc.querySelector('[data-display="input"]');
  var $numbersButton = doc.querySelectorAll('[data-number="button"]');
  var $operationButtons = doc.querySelectorAll('[data-operator="button"]')
  var $equalButton = doc.querySelector('[data-equal="button"]')
  var $cleanButton = doc.querySelector('[data-delete="button"]');

  function numberPressed() {
    $displayCalculator.value += this.value;
  }

  function cleanDisplay() {
    $displayCalculator.value = '';
  }

  function isLastOperator(number) {
    var operators = ['+', '-', 'x', '÷']
    var lastItem = number.split('').pop();
    return operators.some(function (operator) {
      return operator === lastItem
    })
  }

  function equalDisplayHandler() {
    $displayCalculator.value = removeLastItemIfOperator($displayCalculator.value)
    var arrOfValues = $displayCalculator.value.match(/(\d+)[+-x÷]?/g)
    $displayCalculator.value = arrOfValues.reduce(function (accumulated, actual ) {
      var firstValue = accumulated.slice(0,-1);
      var operator = accumulated.split('').pop();
      var lastValue = removeLastItemIfOperator(actual);
      var lastOperator = isLastOperator(actual) ? actual.split('').pop() : '';
      switch(operator){
        case '+':
          return (Number(firstValue) + Number(lastValue)) + lastOperator;
        case '-':
          return (Number(firstValue) - Number(lastValue)) + lastOperator;
        case 'x':
          return (Number(firstValue) * Number(lastValue)) + lastOperator;
        case '÷':
          return (Number(firstValue) / Number(lastValue)) + lastOperator;
      }
    })
  }


  function removeLastItemIfOperator(number) {
    if (isLastOperator(number))
      return number.slice(0, -1)
    return number;
  }

  function operatorsHandler() {
    $displayCalculator.value = removeLastItemIfOperator($displayCalculator.value);
    $displayCalculator.value += this.value;
  }

  Array.prototype.forEach.call($numbersButton, function (button) {
    button.addEventListener('click', numberPressed, false)
  });

  Array.prototype.forEach.call($operationButtons, function (button) {
    button.addEventListener('click', operatorsHandler, false)
  })

  $cleanButton.addEventListener('click', cleanDisplay, false);

  $equalButton.addEventListener('click', equalDisplayHandler, false)

})(window, document);
