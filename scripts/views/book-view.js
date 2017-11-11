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
    $('.book-total').empty();
    $('.book-total').append(`<p>There are ${app.Book.all.length} books in the database.</p>`);
    app.Book.all.forEach(book => $('#book-list').append(book.toHtml()));
  }
  bookView.initDetailPage = function(ctx) {
    reset();
    $('.detail-view').show();
    $('#detail-list').empty();
    let template = Handlebars.compile($('#book-detail-template').text());
    $('#detail-list').append(template(ctx));
    $('#buttons').hide();
    if (localStorage.token === 'true'){
      $('#buttons').show();
    }
    $('.detail-view').on('click', 'button.delete', function(e){
      e.preventDefault();
      app.Book.delete(ctx);
    })
    $('.detail-view').on('click', 'button.update', function(e){
      e.preventDefault();
      page(`/books/${ctx.book_id}/update`);
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
      module.Book.createBook(book);
    })
  }
  bookView.initUpdateFormPage = function (ctx) {
    reset();
    console.log(ctx);
    $('.update-view').show();
    $('#update-title').val(ctx.title);
    $('#update-author').val(ctx.author);
    $('#update-isbn').val(ctx.isbn);
    $('#update-image_url').val(ctx.image_url);
    $('#update-description').val(ctx.description);
    $('#update-form').on('submit', function (e){
      e.preventDefault();
      let book = {
        book_id: ctx.book_id,
        title: event.target.title.value,
        author: event.target.author.value,
        isbn: event.target.isbn.value,
        image_url: event.target.image_url.value,
        description: event.target.description.value
      };
      console.log('book', book);
      module.Book.update(book);
    })

  }

  module.bookView = bookView;
})(app)

$(app.Book.fetchAll(app.bookView.initIndexPage));
