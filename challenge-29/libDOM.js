(function (){
  'use strict'

  function DOM(nodeElement) {
    this.element = document.querySelectorAll(nodeElement)
  }

  DOM.prototype.on = function on(event, callback){
    Array.prototype.forEach.call(this.element,function (nodeElement){
      nodeElement.addEventListener(event,callback,false)
    })
  }

  DOM.prototype.off = function off(event, callback){
    return removeEventListener(event,callback,false)
  }

  DOM.prototype.get = function get(index){
    if(!index)
      return this.element[0]
    return this.element[index]
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

  window.DOM = DOM;

})();
