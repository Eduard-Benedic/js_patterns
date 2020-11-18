const fs = require('fs')





function augment(receivingClass, givingClass) {
     

     if (arguments[2]) {

          for (var i = 2, len = arguments.length; i < len; i++) {

               receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]]

          }

     } else {
          for (methodName in givingClass.prototype) {

               if (!receivingClass.prototype[methodName]) {
     
                    receivingClass.prototype[methodName] = givingClass.prototype[methodName];
     
               }
     
          }
     }
     
     

}

function extend(subClass, superClass) {

     var F = function () { };

     F.prototype = superClass.prototype;

     subClass.prototype = new F();

     subClass.prototype.constructor = subClass;

     subClass.superClass = superClass.prototype;

     if (superClass.prototype.constructor === Object.prototype.constructor) {
          superClass.prototype.constructor = superClass;
     }

}


var Mixin = function () { };


Mixin.prototype = {
     serialize: function () {
          var output = [];

          for (var key in this) {
               output.push(key + ': ' + this[key])
          }

          return output.join(', ');
     }
}

function Person(name) {
     
     this.name = name;


}

Person.prototype.getName = function () {

     return this.name;

}

function Author(name, books) {
     
     Author.superClass.constructor.call(this, name);

     this.books = books;

}

extend(Author, Person);

augment(Author, Mixin, 'serialize')

Author.prototype.getBooks = function () {
     return this.books;
}



function GM (name, books, uni) {
     
     GM.superClass.constructor.call(this, name, books, uni);

     this.uni = uni;

}





extend(GM, Author)


GM.prototype.getUni = function () {
     return this.uni;
}


var ed = new Author('eduard benedic', ['lord', 'dog']);


console.log(ed.serialize())