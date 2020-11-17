
function extend(subClass, superClass) {

     var F = function () {};

     F.prototype = superClass.prototype;
     
     subClass.prototype = new F();

     subClass.prototype.constructor = subClass;

     subClass.superClass = superClass.prototype;

     if(superClass.prototype.constructor == Object.prototype.constructor) {
          superClass.prototype.constructor = superClass;
     }

}


function Person (name) {
     this.name = name;
}

Person.prototype.getName = function () {
     return this.name;
}

function Author (name, books){
     Author.superClass.constructor.call(this, name);
     this.books = books;
}



extend(Author, Person);

Author.prototype.getBooks = function () {
     return this.books;
}

Author.prototype.getName = function () {
     var name = Author.superClass.getName.call(this);
     
     return name + ' ' + 'Author of ' + this.getBooks().join(', ');
}

var author = [];

author[0] = new Author('Eduard Benedic', ['Book of life', 'Some other']);

author[1] = new Author('Jackson Cja', ['Rings and rings', 'Design']);



console.log(author);
console.log(author[0].getBooks());