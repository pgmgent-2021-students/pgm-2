function getJSON(url, successHandler, errorHandler) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = () => {
        if (xhr.status === 200) {
            const data = (!xhr.responseType) ? JSON.parse(xhr.response) : xhr.response;

            successHandler && successHandler(data);
        } else {
            errorHandler && errorHandler('Something went wrong!');
        }
    }
    xhr.send(null);
}