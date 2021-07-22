(function () {
  'use-strict'
  /*
  Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
  métodos semelhantes aos que existem no array, mas que sirvam para os
  elementos do DOM selecionados.
  Crie os seguintes métodos:
  - forEach, map, filter, reduce, reduceRight, every e some.

  Crie também métodos que verificam o tipo do objeto passado por parâmetro.
  Esses métodos não precisam depender de criar um novo elmento do DOM, podem
  ser métodos estáticos.

  Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
  no objeto, como nos exemplos abaixo:
  DOM.isArray([1, 2, 3]); // true
  DOM.isFunction(function() {}); // true
  DOM.isNumber('numero'); // false

  Crie os seguintes métodos para verificação de tipo:
  - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
  O método isNull deve retornar `true` se o valor for null ou undefined.
  */
  function DOM(nodeElement) {
    this.element = document.querySelectorAll(nodeElement)
  }

  DOM.prototype.on = function on(event, callback){
    return addEventListener(event,callback,false)
  }

  DOM.prototype.off = function off(event, callback){
    return removeEventListener(event,callback,false)
  }

  DOM.prototype.get = function get(){
    return this.element
  }
  DOM.prototype.forEach = function forEach(){
    return Array.prototype.forEach.apply(this.element,arguments)
  }

  DOM.prototype.map = function map(){
    return Array.prototype.map.apply(this.element,arguments)
  }

  DOM.prototype.filter = function filter(){
    return Array.prototype.filter.apply(this.element,arguments)
  }

  DOM.prototype.reduce = function reduce(){
    return Array.prototype.reduce.apply(this.element,arguments)
  }

  DOM.prototype.reduceRigh = function reduceRigh(){
    return Array.prototype.reduceRight.apply(this.element,arguments)
  }

  DOM.prototype.every = function every(){
    return Array.prototype.every.apply(this.element,arguments)
  }

  DOM.prototype.some = function some(){
    return Array.prototype.some.apply(this.element,arguments)
  }

  DOM.isArray = function isArray(checkArr){
    return Object.prototype.toString.call(checkArr) === '[object Array]'
  }
  DOM.isObject = function isObject(checkObj){
    return Object.prototype.toString.call(checkObj) === '[object Object]'
  }
  DOM.isFunction = function isFunction(checkFunction){
    return Object.prototype.toString.call(checkFunction) === '[object Function]'
  }
  DOM.isNumber = function isNumber(checkNumber){
    return Object.prototype.toString.call(checkNumber) === '[object Number]'
  }
  DOM.isString = function isString(checkString){
    return Object.prototype.toString.call(checkString) === '[object String]'
  }
  DOM.isBoolean = function isBoolean(checkBoolean){
    return Object.prototype.toString.call(checkBoolean) === '[object Boolean]'
  }
  DOM.isNull = function isNull(checkNull){
    var objCheck = Object.prototype.toString.call(checkNull)
    return objCheck === '[object Null]' || objCheck === '[object Undefined]'
  }


  var $a = new DOM('[data-js="link"]')
  $a.reduce( function (acc, item) {
    console.log(acc, item.getAttribute('data-js'))
    }
  )

  console.log(DOM.isNumber('string'));

})();
