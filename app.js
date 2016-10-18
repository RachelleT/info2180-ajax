// Plain JavaScript AJAX
window.onload = function() {

  var searchBtn = document.querySelector('#searchBtn');
  //console.log(searchBtn);

  searchBtn.addEventListener('click', function(element) {
    element.preventDefault();

    var someName = document.querySelector('#q').value;
    //console.log(someName);

    var httpRequest = new XMLHttpRequest();

    // GET Request
    // var url = "process.php?name=" + someName;
    // httpRequest.onreadystatechange = checkNames;
    // httpRequest.open('GET', url);
    // httpRequest.send();

    // POST Request
    var url = "process.php";
    httpRequest.onreadystatechange = checkNames;
    httpRequest.open('POST', url);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send("name=" + someName); // This only has a value if sending a POST request

    function checkNames() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        var response = JSON.parse(httpRequest.responseText);
        var results = document.querySelector("#results");

        if (httpRequest.status === 200) {
          if (response.data.name) {
            results.textContent = response.data.name + ' is in our list of names.';
          } else {
            results.textContent = response.data.error;
          }

        } else {
          results.textContent = response.data.error + ": It seems you didn't submit the correct data";
        }
      }
    }
  });
};

//jQuery AJAX Example
$(document).ready(function() {
  var jQuerySearchBtn = $('#jQuerySearchBtn');

  jQuerySearchBtn.on('click', function(e) {
    e.preventDefault();

    var someName = $('#q').val();

    // Preferred way to make an AJAX Request in jQuery
    $.ajax('process.php', {
      method: 'POST',
      data: {name: someName}
    }).done(function(response) { // a successful response
      var resp = JSON.parse(response);

      if (resp.data.name) {
        $('#results').text(resp.data.name + ' is in our list of names.');
      } else {
        $('#results').text(resp.data.error);
      }
    }).fail(function(response) { // a failed/error response
      var resp = JSON.parse(response);
      $('#results').text(resp.data.error + ": It seems you didn't submit the correct data");
    });

    // You can also use this format, though the above way is the preferred way.
    // $.ajax('process.php', {
    //   method: 'POST',
    //   data: {name: someName},
    //   success: function (response, status, xhr) {
    //     var resp = JSON.parse(response);
    //
    //     if (resp.data.name) {
    //       $('#results').text(resp.data.name + ' is in our list of names.');
    //     } else {
    //       $('#results').text(resp.data.error);
    //     }
    //   },
    //   error: function (xhr, status, err) {
    //     var resp = JSON.parse(xhr.responseText);
    //     $('#results').text(resp.data.error + ": It seems you didn't submit the correct data");
    //   }
    // });
  });
});
