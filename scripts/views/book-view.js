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
  bookView.initDetailPage = function(ctx) {
    reset();
    $('.detail-view').show();
    $('#detail-list').empty();
    let template = Handlebars.compile($('#book-detail-template').text());
    $('#detail-list').append(template(ctx));
    $('.detail-view').on('click', 'button.delete', function(e){
      e.preventDefault();
      app.Book.delete(ctx);
    })
  }

  bookView.initAddForm = function () {
    reset();
    $('.create-view').show();
    $('#create-form').on('submit', function(e) {
      e.preventDefault();

      let book = {
        title: event.target.title.value,
        author: event.target.author.value,
        isbn: event.target.isbn.value,
        image_url: event.target.image_url.value,
        description: event.target.description.value
      };
      console.log('book', book);
      module.Book.createBook(book)
    })
  }
  bookView.initUpdateFormPage = function () {
    reset();
    $('.update-view').show();
    $('')
  }
  module.bookView = bookView;
})(app)

$(app.Book.fetchAll(app.bookView.initIndexPage));
