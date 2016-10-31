// Here is one way you could do it using jQuery
$(document).ready(function() {
    var jsonBtn = $('#getJson');

    jsonBtn.on('click', function() {
        $.ajax('jsondata.php', {
            method: "GET",
            dataType: 'json'
        }).done(function(response) {
            var superheroes = response.superheroes;

            $('#results').append("<ul></ul>");
            $(superheroes).each(function() {
                $('#results ul').append('<li><h3>' + this.name + ' (a.k.a ' + this.alias + ')</h3><p>' + this.email + '</p></li>');
            });
        }).fail(function() {
            alert('There was a problem with the request.');
        });
    });
});