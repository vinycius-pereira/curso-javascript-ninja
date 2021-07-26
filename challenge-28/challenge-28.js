(function (win, doc, DOM) {
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

  function app() {
    var $cep = doc.querySelector('[data-js="cep"]');
    var $formCep = new DOM('[data-js="formCep"]');
    var $logradouro = new DOM('[data-js="logradouro"]');
    var $bairro = new DOM('[data-js="bairro"]');
    var $estado = new DOM('[data-js="estado"]');
    var $cidade = new DOM('[data-js="cidade"]');
    var $status = new DOM('[data-js="status"]');
    var ajax = new win.XMLHttpRequest()


    function checkIfNumbersOnly() {
      return $cep.value = $cep.value.replace(/\D/g, '');
    }

    function getStatus(type) {
      $status.get()[0].textContent = {
        ok: 'Endereço referente ao CEP ' + $cep.value + ':',
        loading: 'Buscando informações para o CEP ' + $cep.value + '...',
        error: 'Não encontramos o endereço para o CEP ' + $cep.value + '.'
      }[type]
    }

    function handleEventListener() {
      if (ajax.status === 200) {
        fillCepFields()
      }
    }

    function fillCepFields() {
      var ajaxData = handleResponseError()
      if (!ajaxData)
        return getStatus('error')
      getStatus('ok')
      console.log('Data', ajaxData)

      $logradouro.get()[0].textContent = ajaxData.address
      $bairro.get()[0].textContent = ajaxData.district
      $estado.get()[0].textContent = ajaxData.state
      $cidade.get()[0].textContent = ajaxData.city
    }

    function handleSubmitForm(event) {
      event.preventDefault()
      checkIfNumbersOnly()
      ajax.open('GET', "https://ws.apicep.com/cep/" + $cep.value + ".json");
      ajax.send();
      getStatus('loading')
      ajax.addEventListener('readystatechange', handleEventListener, false);
    }


    function handleResponseError() {
      var responseResult;
      try {
        responseResult = JSON.parse(ajax.responseText)
      } catch (e) {
        responseResult = null
      }
      return responseResult
    }

    $formCep.on('submit', handleSubmitForm, false);
  }

  app()
})(window, document, window.DOM);
