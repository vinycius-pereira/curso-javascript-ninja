(function (){
  'use strict'

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

  window.DOM = DOM;

})();
