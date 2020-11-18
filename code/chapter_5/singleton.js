var MyNamespace = {};

MyNamespace.Singleton = (function () {
     var a = 3;

     var privateMethod1 = false,
          privateMethod2 = [1, 2, 3, 4, 5];
     
     function privateMethod1() {

     }

     function privateMethod2() {

     }

     return {

          publicAtt1: true,
          publitAtt2: 'salutare',
          publicMethod1: function () {
               console.log('i am a public method')
               console.log(a)
          },
          publicMethod2: function () {
               
          }

     };
}())

console.log(MyNamespace.Singleton.publicMethod())