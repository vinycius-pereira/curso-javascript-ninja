(function (win, doc, DOM) {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */


  var $companyName = new DOM('[data-js="company-name"]').get();
  var $companyPhone = new DOM('[data-js="company-phone"]').get();

  var $tableCar = new DOM('[data-js="table-body"]').get();

  var $tbody = doc.querySelector('[data-js="table-body"]');


  var ajax = new XMLHttpRequest();
  ajax.open('GET', 'company.json', true);
  ajax.send();

  function handleEvents() {
    ajax.addEventListener('readystatechange', getCompanyInfo, false);
    new DOM('[data-js="register-car"]').on('submit', handleSubmit, false);
    new DOM('[data-js="delete-button"]').on('click', handleDeleteRow, false);
  }

  function handleDeleteRow() {
    if($tableCar.firstChild)
      return $tableCar.removeChild($tableCar.lastChild)
    alert('Não há elementos para ser removido');
  }

  function handleSubmit(e) {
    e.preventDefault();
    $tableCar.appendChild(createNewCar())
  }

  function createNewCar() {
    var $fragment = doc.createDocumentFragment();
    var $tr = doc.createElement('tr');
    var $tdImage = doc.createElement('td');
    var $image = doc.createElement('img');
    var $tdBrand = doc.createElement('td');
    var $tdYear = doc.createElement('td');
    var $tdPlate = doc.createElement('td');
    var $tdColor = doc.createElement('td')



    $image.src = new DOM('[data-js="image"]').get().value
    $tdBrand.textContent = new DOM('[data-js="brand-model"]').get().value
    $tdYear.textContent = new DOM('[data-js="year"]').get().value
    $tdPlate.textContent = new DOM('[data-js="plate"]').get().value
    $tdColor.textContent = new DOM('[data-js="color"]').get().value

    $tdImage.appendChild($image);
    $tr.appendChild($tdImage);
    $tr.appendChild($tdBrand);
    $tr.appendChild($tdYear);
    $tr.appendChild($tdPlate);
    $tr.appendChild($tdColor);


    return $fragment.appendChild($tr)
  }


  function getCompanyInfo() {
    $companyName.textContent = JSON.parse(ajax.responseText).name
    $companyPhone.textContent = JSON.parse(ajax.responseText).phone
  }

  handleEvents()


})(window, document, window.DOM);
