const RANDOM_USER_ME_API = 'https://randomuser.me/api/?results=100';

(() => {
    const app = {
        initialize() {
            this.cacheElements();
            this.loadJSONData();
        },
        cacheElements() {
           this.$usersList = document.querySelector('.users-list');
        },
        loadJSONData() {
            getJSON(RANDOM_USER_ME_API,
                (data) => {
                    const results = data.results;
                    let tempStr = '';
                    results.forEach((user) => {
                        tempStr += `
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                            <article class="card user">
                                <img src="${user.picture.large}">
                                <div class="card-body">
                                    <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">${user.email}</li>
                                    <li class="list-group-item">${user.cell}</li>
                                    <li class="list-group-item">Vestibulum at eros</li>
                                </ul>
                            </article>
                        </div>
                        `;
                    });
                    this.$usersList.innerHTML = tempStr;
                },
                (error) => {

                })
        }
    };
    app.initialize();
})();