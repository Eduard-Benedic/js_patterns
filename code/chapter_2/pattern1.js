var Book = (function () {

     // Private Static Attribute
     var numBooks = 0;

     function checkIsbn() {
          return true;
     }

     return function (isbn, title, author) {

          var isbn, title, author;

          this.getIsbn = function () {
               return isbn;
          }
          this.setIsbn = function (newIsbn) {
               if (checkIsbn(newIsbn)) return true;

               isbn = newIsbn || 'Unknown Isbn';
          }
          this.getTitle = function () {
               return title;
          }
          this.setTitle = function (newTitle) {
               title = newTitle || 'Unknown title';
          }
          this.getAuthor = function () {
               console.log(numBooks)
               return author;
          }
          this.setAuthor = function (newAuthor) {
               author = newAuthor || 'Uknown author'
          }

          numBooks++;

          if (numBooks > 50) {
               throw new Error('Only 50 instances of Book can be created')
          }

          this.setIsbn(isbn);
          this.setTitle(title);
          this.setAuthor(author);
     }
}());

Book.convertToTitleCase = function (inputString) {
     return 123;
}
 
var lord =new Book('222222222', 'Lord of the kings', 'Eduard Benedic');

console.log(lord.getAuthor())