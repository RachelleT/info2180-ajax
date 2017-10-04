window.addEventListener('load', function() {
    let loadBtn = document.querySelector('#loadTextBtn');

    loadBtn.addEventListener('click', function(element) {
        element.preventDefault();

        fetch("random-text.php")
            .then(response => {
                if (response.ok) {
                    return response.text()
                } else {
                    return Promise.reject('something went wrong!')
                }
            })
            .then(data => {
                let quote = document.querySelector('#quote');
                quote.innerHTML = data;
            })
            .catch(error => console.log('There was an error: ' + error));
    });
});