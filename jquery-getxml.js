// Here is one way you could do it using jQuery
$(document).ready(function() {
    var xmlBtn = $('#getXml');

    xmlBtn.on('click', function() {
        $.ajax('xmldata.php', {
            method: "GET"
        }).done(function(response) {
            var people = $(response).find('person');
            $('#results').append("<ul></ul>");
            $(people).each(function() {
                $('#results ul').append('<li>' + $(this).find('name').text() + '</li>');
            });
        }).fail(function() {
            alert('There was a problem with the request.');
        });
    });
});