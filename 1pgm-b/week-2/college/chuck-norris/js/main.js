// http://api.icndb.com/jokes/random?firstName=John&lastName=Doe
const CHUCK_NORRIS_JOKE_API_ENDPOINT = 'http://api.icndb.com/jokes/randomx?firstName=John&lastName=Doe';

// 1. Cache elements
const $joke = document.querySelector('.joke');

// Describe a function
// Loads data from a certain url
function getJSON (url) {
    const xhr = new XMLHttpRequest();
    responseType = 'json';
    xhr.open('GET', url, true);
    xhr.onload = () => {
        if (xhr.status === 200) {
            // Received data
            const data = (!xhr.responseType) ? JSON.parse(xhr.response) : xhr.response;
            // Transform data to a string (HTML)
            const myStr = `
                <p class="joke__content">${data.value.joke}</p>
                ${data.value.categories.length > 0 ? `<ul>${data.value.categories.map((c) => `<li>${c}</li>`).join('')}</ul>` : ''}
            `;
            // Inject string into the DOM element via $joke
            $joke.innerHTML = myStr;
            // Add data attribute id to the DOM element via $joke
            $joke.dataset.id = data.value.id;
        }
    };
    xhr.send(null);
}

// Call the getJSON function
getJSON(CHUCK_NORRIS_JOKE_API_ENDPOINT);