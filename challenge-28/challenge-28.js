(function (win,doc) {
  'use strict'
  /*
    No HTML:
    - Crie um formulário com um input de texto que receberá um CEP e um botão
    de submit;
    - Crie uma estrutura HTML para receber informações de endereço:
    "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
    preenchidas com os dados da requisição feita no JS.
    - Crie uma área que receberá mensagens com o status da requisição:
    "Carregando, sucesso ou erro."

    No JS:
    - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
    deve ser limpo e enviado somente os números para a requisição abaixo;
    - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
    "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
    no input criado no HTML;
    - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
    com os dados recebidos.
    - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
    a mensagem: "Buscando informações para o CEP [CEP]..."
    - Se não houver dados para o CEP entrado, mostrar a mensagem:
    "Não encontramos o endereço para o CEP [CEP]."
    - Se houver endereço para o CEP digitado, mostre a mensagem:
    "Endereço referente ao CEP [CEP]:"
    - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
    adicionar as informações em tela.
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

  var $cep = doc.querySelector('[data-js="cep"]');
  var $formCep = new DOM('[data-js="formCep"]');
  var $logradouro = new DOM ('[data-js="logradouro"]');
  var $bairro = new DOM ('[data-js="bairro"]');
  var $estado = new DOM ('[data-js="estado"]');
  var $cidade = new DOM ('[data-js="cidade"]');
  var $status = new DOM('[data-js="status"]');
  var ajax = new win.XMLHttpRequest()


  function checkIfNumbersOnly() {
    return $cep.value = $cep.value.replace(/\D/g,'');
  }

  function getStatus(type){
    $status.get()[0].textContent = {
      ok: 'Endereço referente ao CEP ' + $cep.value + ':',
      loading: 'Buscando informações para o CEP ' + $cep.value + '...',
      error: 'Não encontramos o endereço para o CEP ' + $cep.value + '.'
    }[type]
  }

  function handleEventListener() {
    if(ajax.status === 200){
      fillCepFields()
    }
  }

  function fillCepFields() {
    var ajaxData = handleResponseError()
    if(!ajaxData)
      return getStatus('error')
    getStatus('ok')
    console.log('Data',ajaxData)

    $logradouro.get()[0].textContent = ajaxData.address
    $bairro.get()[0].textContent = ajaxData.district
    $estado.get()[0].textContent = ajaxData.state
    $cidade.get()[0].textContent = ajaxData.city
  }

  function handleSubmitForm (event){
    event.preventDefault()
    checkIfNumbersOnly()
    ajax.open('GET',"https://ws.apicep.com/cep/" + $cep.value + ".json");
    ajax.send();
    getStatus('loading')
    ajax.addEventListener('readystatechange',handleEventListener,false);
  }


  function handleResponseError (){
    var responseResult;
    try{
      responseResult = JSON.parse(ajax.responseText)
    }
    catch (e) {
      responseResult = null
    }
    return responseResult
  }

  $formCep.on('submit',handleSubmitForm,false);

})(window,document);
