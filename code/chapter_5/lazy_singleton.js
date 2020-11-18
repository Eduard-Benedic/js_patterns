var MyNamespace = {};

MyNamespace.Singleton = (function () {

     var uniqueInstance;

     function constructor() {
       
          var privateAttribute1 = false;
          var privateAttribute2 = [1, 2, 3, 5];
     
          function privateMethod1() {
               
          }
     
          function privateMethod2() {
     
          }

          return {
               publicAttribute1: true,
               publicAttribute2: 19,
     
               publicMethod1: function () {
     
               },
               publicMethod2: function () {
     
               }
           }
     }

     return {
          getInstance: function () {

               if (!uniqueInstance) {
                    
                    uniqueInstance = constructor();

               }

               return uniqueInstance

          }
     }
    
}())

console.log(MyNamespace.Singleton.getInstance())