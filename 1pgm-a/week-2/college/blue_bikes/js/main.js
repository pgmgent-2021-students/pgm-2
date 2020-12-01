const GHENT_BLUE_BIKES_DAMPOORT = 'https://data.stad.gent/api/records/1.0/search/?dataset=blue-bike-deelfietsen-gent-dampoort&q=';

(() => {
    const app = {
        initialize() {
            this.cacheElements();
            this.loadJSONData();
        },
        cacheElements() {
            // Cache elements
            this.$blueBikesList = document.querySelector('.blue-bikes__list');
        },
        loadJSONData() {
            // Call the function getJSON()
            getJSON(GHENT_BLUE_BIKES_DAMPOORT,
                (data) => {
                    let tempStr = `
                        <li>${data.records[0].fields.capacitytotal} / ${data.records[0].fields.capacityavailable}
                        <span>${data.records[0].fields.test}</span>
                        </li>`;
                    this.$blueBikesList.innerHTML = tempStr;
                },
                (error) => {
                    console.error(error);
                });
        }
    };
    app.initialize();
})();