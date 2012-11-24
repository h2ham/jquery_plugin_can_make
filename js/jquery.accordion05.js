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
      $(this).children().filter(':nth-child(odd)').on('click', function () {
        if (!$(this).hasClass(conf.addClassName)) {
          $('.' + conf.addClassName).removeClass(conf.addClassName).next().stop(true, true).slideUp(conf.dulation);
        }
        $(this).toggleClass(conf.addClassName).next().stop(true, true).slideToggle(conf.dulation);
      });
    });
  };
}(jQuery));