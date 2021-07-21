/*
Essa semana você terá dois desafios:
1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
o que não ficou tão claro das aulas anteriores.
É essencial que você entenda todo o conteúdo que foi passado até aqui,
para que possamos prosseguir para a parte mais avançada do curso :D

2) Estudar eventos!
Acesse a página do MDN:
https://developer.mozilla.org/en-US/docs/Web/Events#Categories

Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
desafio os experimentos legais que você conseguir desenvolver :D
*/
(function(win,doc){
  'use-strict'

  /*
   button that turns on and off
  - if on background should be white and title black
  - if off background should be black and title white
 */

  function getElements(e) {
    return doc.querySelector(e)
  }

  var buttonOn = getElements('[data-js="buttonOn"]');
  var buttonOff = getElements('[data-js="buttonOff"]');
  var title = getElements('[data-js="title"]')
  var body = getElements('.body')

  function initialize(){
    initEvents()
  }

  function initEvents() {
    buttonOn.addEventListener('click',turnOn,false)
    buttonOff.addEventListener('click',turnOff,false)
  }

  function getElementColor(bodyColor,titleColor){
    body.style.backgroundColor = bodyColor
    title.style.color = titleColor
  }

  function turnOn() {
    if(body.style.backgroundColor === 'white')
      win.alert('It\'s already on');
    getElementColor('white','black')
  }
  function turnOff() {
    if(body.style.backgroundColor === 'black')
      win.alert('It\'s already off');
    getElementColor('black','white')
  }

  initialize()
})(window,document);
