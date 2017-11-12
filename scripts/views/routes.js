'use strict'

if (window.location.pathname !== '/') {
  console.log('Running remote.  Setting base to /book-list-client');
  page.base('/book-list-client');
}

page('/', ctx => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/new', ctx => app.bookView.initAddForm(ctx));
page('/books/:book_id', ctx => app.Book.fetchOne(ctx, app.bookView.initDetailPage));
page('/books/:book_id/update', ctx => app.Book.fetchOne(ctx, app.bookView.initUpdateFormPage));
page('admin', () => app.adminView.initAdminPage());
page();
