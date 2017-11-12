'use strict'

if (window.location.pathname !== '/') {
  console.log('Running remote.  Setting base to /book-list-client');
  page.base('/book-list-client');
}

page('/book-list-client/', ctx => app.Book.fetchAll(app.bookView.initIndexPage));
page('/book-list-client/books/new', ctx => app.bookView.initAddForm(ctx));
page('/book-list-client/books/:book_id', ctx => app.Book.fetchOne(ctx, app.bookView.initDetailPage));
page('/book-list-client/books/:book_id/update', ctx => app.Book.fetchOne(ctx, app.bookView.initUpdateFormPage));
page('/book-list-client/admin', () => app.adminView.initAdminPage());
page();
