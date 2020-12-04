const COUNTRIES_API = 'https://restcountries.eu/rest/v2/all';

(() => {
    const app = {
        initialize() {
            this.cacheElements();
            this.loadJSONData();
        },
        cacheElements() {
           this.$countriesList = document.querySelector('.countries-list');
        },
        loadJSONData() {
            fetch(COUNTRIES_API, {})
                .then(response => response.json())
                .then(json => this.updateCountriesUI(json))
                .catch((error) => console.error(error));
        },
        updateCountriesUI(countriesData) {
            this.$countriesList.innerHTML = countriesData.map((country) => {
                return `
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                    <article class="card user">
                        <img src="${country.flag}">
                        <div class="card-body">
                            <h5 class="card-title">${country.name}</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${country.capital}</li>
                            <li class="list-group-item">${country.region}</li>
                            <li class="list-group-item">Vestibulum at eros</li>
                        </ul>
                    </article>
                </div>
                `
            }).join('');
        }
    };
    app.initialize();
})();