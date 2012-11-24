/*jslint white: false, nomen: false, node: true, indent: 2,  */
/*global $: false, jQuery: false,  */
'use strict';

(function ($) {
  $.fn.accordion = function () {
    return this.each(function () {
      $(this).children('dt').on('click', function () {
        $(this).toggleClass('open').next().slideToggle();
      });
    });
  };
}(jQuery));