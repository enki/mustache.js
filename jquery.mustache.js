/*
Shameless port of a shameless port
@defunkt => @janl => @aq
 
See http://github.com/defunkt/mustache for more info.
*/
 
;(function($) {
  $.mustache = function(template, view, partials) {
    var extended = {};
    $.extend(extended, view, {
       'sitepart': SITEPART 
    });
    return Mustache.to_html(template, extended, partials);
  };
})(jQuery);
