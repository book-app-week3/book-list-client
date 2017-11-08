'use strict';

var app = app || {};
var __API_URL__ = 'https://gj-jk-booklist.herokuapp.com';

(function(module) {
  function Book (rawBookObj) {
    Object.keys(rawBookObj).forEach(key => this[key] = rawBookObj[key]);
  }
  Book.prototype.toHtml = function (){
    let template = Handlebars.compile($('#book-list-template').text());
    return template(this);
  }
  Book.all = [];
  Book.loadAll = rows => {
    rows.sort((a, b) => b.title - a.title)
    Book.all = rows.map(book => new Book(book));
  }
  Book.fetchAll = callBack =>
    $.get(`${__API_URL__}/api/v1/books`)
      .then(Book.loadAll)
      .then(callBack);
//.then(errorCallBack);
//   Book.createBook = book =>
//     $.post(`${__API_URL__}/books/add`, book)
//       .then(() => page('/'));
// //.then(errorCallBack);
//   module.Book = Book;
})(app)
