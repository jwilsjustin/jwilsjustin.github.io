var username = "justin";
var hostname = "jwils.co";
var linktext = username + "@" + hostname;
var lastfour = "9433"
$(document).ready(function() {
  $('td h2#themessagesystem').html('<a href="mailto:' + linktext + '?Subject=Hello">' + linktext + '</a>')
  $('td h2#contactdigits').html('<a href="tel:864787' + lastfour + '">864-787-' + lastfour + '</a>')
  $('td h2#themessagesystemlabel').html('<small>Ema'+'il</small>')
});
