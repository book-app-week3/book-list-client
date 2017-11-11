'use strict';
var app = app || {};

(function(module) {
  const adminView = {};

  function reset() {
    $('.container').hide();
    $('navigation').slideDown(350);
  }

  adminView.initAdminPage = function() {
    reset();
    $('.admin-view').show();
    
  }


  module.adminView = adminView;
})(app)
