console.log('hello world')

//var username = "justin";
//var tld = ".co"
//var linktext = username + "&#064;" + hostname + tld;
var lastfour = "9433"
var last = "il"
$(document).ready(function() {
  //$('td h2#themessagesystem').html('<a href="mailto:' + linktext + '?Subject=Hello">' + linktext + '</a>')
  $('td h2#contactdigits').html('<a href="tel:864787' + lastfour + '">864-787-' + lastfour + '</a>')
  $('td h2#themessagesystemlabel').html('<small style="text-transform:capitalize">ema'+ last +'</small>')
});