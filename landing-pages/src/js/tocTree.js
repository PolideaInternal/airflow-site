/* global $ */
$('.toctree ul').siblings('a').each(function () {
  var link = $(this);
  expand = $('<span class="toctree-expand"></span>');
  link.prepend(expand);
});
