'use strict';
var app = app || {};
var __API_URL__ = 'https://gj-jk-booklist.herokuapp.com';
(function(module) {
  const adminView = {};

  function reset() {
    $('.container').hide();
    $('navigation').slideDown(350);
  }

  adminView.initAdminPage = function() {
    reset();
    $('.admin-view').show();
    $('#admin-form').off('submit');
    $('#admin-form').on('submit', function(event) {
      event.preventDefault();
      let token = event.target.passcode.value;
      console.log(event.target.passcode.value)
      $.get(`${__API_URL__}/api/v1/admin`, {token})
        .then(res => {
          localStorage.setItem('token', res);
          page('/');
        })
        .catch(() => page('/'));
    })
    adminView.verify();
  }

  adminView.verify = function() {
    if(!localStorage.token) console.log('no token')
    else console.log('token')
  }
  module.adminView = adminView;
})(app)
