const PROXY_SERVER = 'https://api.codetabs.com/v1/proxy/?quest=';
const EVIL_INSULT_API_ENDPOINT = 'https://evilinsult.com/generate_insult.php?lang=en&type=json';

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
    xhr.onerror = (error) => {
      errorHandler && errorHandler(error);
    };
    xhr.send(null);
}

// Call the getJSON function
getJSON(`${PROXY_SERVER}${EVIL_INSULT_API_ENDPOINT}`, 
    (data) => {
      console.log(data);
        // Transform data to a string (HTML)
        const myStr = `
          <p class="insult__content">${data.insult}</p>
        `;
        // Inject string into the DOM element via $insult
        $insult.innerHTML = myStr;
        // Add data attribute id to the DOM element via $insult
        $insult.dataset.id = parseInt(data.number);
        $insult.dataset.lang = data.language;
    },
    (error) => {
        console.log(error);
    }
);