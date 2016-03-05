// core

//= require "plugins/jquery.js"
//= require "plugins/jquery-ui.js"
//= require "plugins/modernizr.js"
//= require "plugins/classie.js"

// components

//= require "components/navigation.js"
//= require "components/core.js"
//= require "components/touch.js"
//= require "components/transition.js"
//= require "components/mediaquery.js"
//= require "components/scrollbar.js"
//= require "components/swap.js"

//= require "components/lightbox.js"
//= require "components/carousel.js"
//= require "components/dropdown.js"
//= require "components/upload.js"
//= requure "components/tooltip.js"
//= require "components/tabs.js"
//= require "components/params.js"

// components init

if ($('.mk-lightbox').length > 0) {
  $('.mk-lightbox').lightbox();
}

if ($('.mk-carousel').length > 0) {
  $('.mk-carousel').carousel();
}

if ($('.mk-dropdown').length > 0) {
  $('.mk-dropdown').dropdown();
}

if ($('.mk-tooltip').length > 0) {

  // <a href="#" data-title="ToolTip Text">Tooltip Target</a>

  $('.mk-tooltip').tooltip({
    direction: "top",
    delay: 500
  });
}

if ($('.mk-tab').length > 0) {

  $('.mk-tab').tabs();

  // <nav>
  //   <a href="#tab-one" class="tab" data-tabs-group="tab-group">One</a>
  //   <a href="#tab-two" class="tab" data-tabs-group="tab-group">Two</a>
  //   <a href="#tab-three" class="tab" data-tabs-group="tab-group">Three</a>
  // </nav>
  // <div id="tab-one">
  //     ...
  // </div>
  // <div id="tab-two">
  //     ...
  // </div>
  // <div id="tab-three">
  //     ...
  // </div>

}

$(function(){
  $('.menu').hide();
  $('#menuRemove').hide();

  if ($('#menuBars').length > 0) {

    // vars

    var menuBars = $('#menuBars'),
        menuRemove = $('#menuRemove'),
        menu = $('.menu');

    menuBars.on('click', function(e){
      e.preventDefault();
      $(this).fadeOut('slow', function(){
        menuRemove.fadeIn('slow', function(){});
        menu.show('slide', {direction: 'right'}, 1000);
      });
    });

    menuRemove.on('click', function(e){
      e.preventDefault();
      $(this).fadeOut('slow', function(){
        menuBars.fadeIn('slow', function(){});
        menu.hide('slide', {direction: 'right'}, 1000);
      });
    });
  }
});

$(function(){

  if ($('.closeModal').length > 0) {

    $('.closeModal').on('click', function(e){
      e.preventDefault();
      $('.fadeinModal').fadeOut('slow', function(){
        menuBars.fadeIn('slow', function(){});
        menu.hide('slide', {direction: 'right'}, 1000);
      });
    });

  }

  $('a').on('click', function(e){
    e.preventDefault();
    if ($(this).attr('href') == '#contact') {
      $('.fadeinModal').fadeOut('slow', function(){
        $(this).removeClass('hide', 1000);
      });
    } else {
      return true;
    }
  });
});