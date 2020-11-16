var Book = function (isbn, title, author) {

     var isbn, title, author;

     function checkIsbn (isbn) {

          if (!(isbn.length == 10)) {
               throw new Error('Isbn must be exactly 10 char long');
          } 

          return true

     }

     this.getIsbn = function() {

          return isbn;

     }

     this.setIsbn = function (isbn) {
          if (checkIsbn(isbn)) {
               isbn = isbn;
          }
     }

     this.getTitle = function() {

          return title;

     }

     this.setTitle = function (newTitle) {

          title = newTitle || 'Unknown Title';
     }
     
     this.getAuthor = function (newAuthor) {

          return author;

     }

     this.setAuthor = function (newAuthor) {
          author = newAuthor || 'Unknown Author'
     }

   

     this.setIsbn(isbn);
     this.setTitle(title);
     this.setAuthor(author);


}

Book.prototype = {
     display: function () {}
}

var lord = new Book('2234567654', 'Lord of the kings', 'Eduard Benedic');

console.log(lord)