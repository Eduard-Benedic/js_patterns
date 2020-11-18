var MyNamespace = {};

MyNamespace.Singleton = (function () {

     var someCondition = Math.random() > 0.5 ? true : false;

     var objectA = {
          method1: function () {

          },
          method2: function () {

          }
     };

     var objectB =  {
          method1: function () {

          }, 
          method2: function () {

          }
     }

     return (someCondition) ? objectA : objectB

}())