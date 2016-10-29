$(document).ready(function() {
  var nameSubmitBtn = $('#nameSubmitBtn');

  nameSubmitBtn.on('click', function(element) {
    element.preventDefault();
    var yourname = $('#name').val();
    var yourIdNumber = $('#idnumber').val();

    $.ajax('process-name.php', {
      method: 'POST',
      data: {
        name: yourname,
        idnumber: yourIdNumber
      }
    }).done(function(response) {
      var resp = response;
      $('#result').html(resp);
    }).fail(function() {
      alert('There was a problem with the request.');
    });

    // This is another way to do the same as above.
    // Note: The success and error functions. They are equivalent to the
    // done() and fail() methods. The above way is the preferred way though.
    // $.ajax('process-name.php', {
    //   method: 'POST',
    //   data: {
    //     name: yourname,
    //     idnumber: yourIdNumber
    //   },
    //   success: function (data, status, xhr) {
    //     var resp = data;
    //     $('#result').html(resp);
    //   },
    //   error: function () {
    //     alert('There was a problem with the request.');
    //   }
    // });
  })
});
