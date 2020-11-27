// https://evilinsult.com/generate_insult.php?lang=en&type=json
const EVIL_INSULT_API_ENDPOINT = 'http://api.icndb.com/jokes/randomx?firstName=John&lastName=Doe';

// 1. Cache elements
const $insult = document.querySelector('.insult');

// Describe a function
// Loads data from a certain url
function getJSON (url, successHandler, errorHandler) {
    const xhr = new XMLHttpRequest();
    responseType = 'json';
    xhr.open('GET', url, true);
    xhr.onload = () => {
        if (xhr.status === 200) {
            // Received data
            const data = (!xhr.responseType) ? JSON.parse(xhr.response) : xhr.response;
            successHandler && successHandler(data); 
        } else {
            errorHandler && errorHandler('Network Error!');
        }
    };
    xhr.send(null);
}

// Call the getJSON function
getJSON(EVIL_INSULT_API_ENDPOINT, 
    function (data) {
        // Transform data to a string (HTML)
        const myStr = `
        <p class="insult__content">${data.value.joke}</p>
        ${data.value.categories.length > 0 ? `<ul>${data.value.categories.map((c) => `<li>${c}</li>`).join('')}</ul>` : ''}
        `;
        // Inject string into the DOM element via $joke
        $insult.innerHTML = myStr;
        // Add data attribute id to the DOM element via $joke
        $insult.dataset.id = data.value.id;
    },
    function (error) {
        console.log(error);
    }
);