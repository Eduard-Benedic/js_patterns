function Clone(object) {
     function F() { }
     F.prototype = object;

     return new F;
}

var Person = {
     name: 'default name',
     getName: function () {
          return this.name;
     }
}

var reader = clone(Person);

console.log(reader.getName());

reader.name = 'John frankenstein';

var Author = clone(Person);

Author.books = [];

Author.getBooks = function () {
     return this.books;
}

var author = [];

author[0] = clone(Author);

author[0].name = 'Dustin Diaz';

author[0].books = ['Javascript'];