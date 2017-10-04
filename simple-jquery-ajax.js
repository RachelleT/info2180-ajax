// Simple Example using jQuery's $.ajax() method
$(document).ready(function() {
  var quoteBtn = $('#loadQuoteBtn');
  var quote = $('#quote');

  quoteBtn.on('click', function() {
    $.ajax('random-text.php', {
      method: 'GET'
    }).done(function(response) {
      quote.html(response);
    }).fail(function() {
      alert('There was a problem with the request.');
    });
  });
});
