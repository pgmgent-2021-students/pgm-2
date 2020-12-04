const COUNTRIES_API = 'https://restcountries.eu/rest/v2/all';

(() => {
    const app = {
        initialize() {            
            this.cacheElements();
            this.getDataFromCountriesAPIEndpoint();
        },
        cacheElements() {
            this.$countriesList = document.querySelector('.countries-list');
        },
        getDataFromCountriesAPIEndpoint() {
            fetch(COUNTRIES_API, {})
                .then(response => {
                    if (response.status === 200) {
                        return response.json();
                    }
                    throw new Error('Something went wrong!');
                })
                .then(json => this.updateCountriesUI(json))
                .catch(error => console.log(error));
        },
        updateCountriesUI(data) {
            this.$countriesList.innerHTML = data.map((country) => {
                return `
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                    <article class="card">
                        <img src="${country.flag}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${country.name}</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${country.capital}</li>
                            <li class="list-group-item">${country.region}</li>
                        </ul>
                    </article>
                </div>
                `;
            }).join('');
        }
    };
    app.initialize();
})();