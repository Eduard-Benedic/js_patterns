function Person (name) {
     this.name  = name;
}

Person.prototype.getName = function () {
     this.cons = true;
     return this.name;
}

function Author (name, books) {

     Author.superClass.constructor.call(this, name)
     this.books = books;
}

Author.constructor = Person;

var edAuthor  = new Author('eduard benedic');

console.log(edAuthor.constructor.call(edAuthor,'hehe'))