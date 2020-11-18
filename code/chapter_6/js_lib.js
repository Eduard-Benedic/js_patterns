Function.prototype.method = function (name, fn) {
     this.prototype[name] = fn;

     return this;
}

(function () {
     
     function _$(els) {
               
          // ...

     }

     /*
          Events
               * addEvent
               * getEvent
     */

     _$.method('addEvent', function () {

     }).method('getEvent', function () {

     }).

     /*
          DOM
               * addClass
               * removeClass
               * replaceClass
               * getStyle
               * setStyle
     */
     
     method('addClass', function (className) {
          
     }).method('removeClass', function (className) {

     }).method('replaceClass', function (oldClass, newClass) {

     }).method('hasClass', function (className) {
          
     }).method('getStyle', function (prop) {

     }).method('setStyle', function (prop, va) {

     }).
     /*
          Ajax
               * load. Fetches an HTML fragment from a URL and inserts it into an element
     */
     
     method('load', function (uri, method) {
          
     });

     window.installHelper = function (scope, interface) {
          scope[interface] = function () {
               return new _$(arguments);
          }
     }

}())

installHelper(window, '$')