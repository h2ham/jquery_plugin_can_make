/*jslint white: false, nomen: false, node: true, indent: 2,  */
/*global $: false, jQuery: false,  */
'use strict';

(function ($) {
  $.fn.accordion = function (options) {
    var conf = $.extend({
      dulation:     'fast',
      addClassName: 'open'
    }, options);
    return this.each(function () {
      $(this).children('dt').on('click', function () {
        $(this).toggleClass(conf.addClassName).next().slideToggle(conf.dulation);
      });
    });
  };
}(jQuery));