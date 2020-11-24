const chuckNorrisRandomJokeAPIEndpoint = `http://api.icndb.com/jokes/random`;

// Cache Elements
const $joke = document.querySelector('.joke');

// AJAX
// Asynchronous JavaScript and XML
// XMLHttpRequest
// 1. Create a XMLHttpRequest object
const xhr = new XMLHttpRequest();
// 2. Declare the type of a response
xhr.responseType = 'json';
// 3. Listen to the changes in states within the connection
xhr.onreadystatechange = () => {
    switch (xhr.readyState) {
        // case 1: console.log('OPENED');break;
        // case 2: console.log('HEADERS RECEIVED');break;
        // case 3: console.log('LOADING');break;
        case 4: 
            console.log('LOADED');
            if (xhr.status === 200) {
                console.log('OK');
                // Get the received data --> response
                const data = (!xhr.responseType) ? JSON.parse(xhr.response) : xhr.response;
                console.log(data);
                $joke.dataset.id = data.value.id;
                $joke.innerHTML = `
                <p class="joke__text">${data.value.joke}</p>
                <span class="joke__categories">${data.value.categories.join(', ')}</span>
                `
            }
            break;
    }
}
// ...
// 4. Open the connection (tunnel) the the resource via the url
xhr.open('GET', chuckNorrisRandomJokeAPIEndpoint, true);
// 5. Make the request to the specified resource
xhr.send(null);
