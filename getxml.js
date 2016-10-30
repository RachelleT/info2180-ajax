window.onload = function() {
    var getXmlBtn = document.querySelector('#getXml');

    getXmlBtn.addEventListener('click', function() {
        var httpRequest = new XMLHttpRequest();

        // GET Request
        var url = "xmldata.php";
        httpRequest.onreadystatechange = getXml;
        httpRequest.open('GET', url);
        httpRequest.send();

        function getXml() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
              if (httpRequest.status === 200) {
                // Note that we use responseXML instead of responseText
                // when we are expecting XML data.
                var response = httpRequest.responseXML;
                var results = document.querySelector('#results');
                var people = response.getElementsByTagName('person');
                
                var list = document.createElement('ul');
                results.appendChild(list);
                for (var x = 0; x < people.length; x++) {
                    var person = document.createElement('li');
                    var text = document.createTextNode(people[x].children[0].childNodes[0].nodeValue);
                    person.appendChild(text)
                    list.appendChild(person);
                }
              } else {
                alert('There was a problem with the request.');
              }
            }
        }
    });
};
