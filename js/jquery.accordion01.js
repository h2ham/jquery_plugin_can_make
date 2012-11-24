/*jslint white: false, nomen: false, node: true, indent: 2,  */
/*global $: false, jQuery: false,  */
'use strict';

jQuery(function ($) {
  $('.accordion :nth-child(odd)').on('click', function () {
    $(this).toggleClass('open').next().slideToggle();
  });
});