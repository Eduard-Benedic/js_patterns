var myClass = (function () {

     // Constants as private static attributes;

     var constants = {
          UPPER_BOUND: 100,
          LOWER_BOUND: 100
     }
     
     this.getConstant = function (name) {
          return constants[name];
     } 

     return function (constructorArgument) {

     }

})();

console.log(myClass.getConstant);