'use strict';
var app = app || {};

(function(module) {
  const bookView = {};

  function reset() {
    $('.container').hide();
    $('navigation').slideDown(350);
  }

  bookView.initIndexPage = function() {
    reset();
    $('.book-view').show();
    $('#book-list').empty();
    $('.book-view').append(`<p>There are ${app.Book.all.length} books in the database.</p>`);
    app.Book.all.forEach(book => $('#book-list').append(book.toHtml()));
  }
  // bookView.initAddForm = function () {
  //   reset();
  //   $('.add-form-view').show();
  //   $('#add-book').on('submit', function(e) {
  //     e.preventDefault();
  //
  //     let book = {
  //       title: event.target.title.value,
  //       author: event.target.author.value,
  //       isbn: event.target.author.value,
  //       image_url: event.target.image_url.value,
  //       description: event.target.description.value
  //     };
  //     console.log('book', book);
  //
  //     module.Book.createBook(book)
  //
  //   })
  // }
  module.bookView = bookView;
})(app)

$(app.Book.fetchAll(app.bookView.initIndexPage));
