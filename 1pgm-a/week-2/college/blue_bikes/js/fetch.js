// Declare a function
// Load JSON data from an online resource (url)
function getJSON (url, successHandler, errorHandler) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.response);
            successHandler && successHandler(data);
        } else {
            errorHandler && errorHandler('Network Error!');
        }
    }
    xhr.send(null);
}