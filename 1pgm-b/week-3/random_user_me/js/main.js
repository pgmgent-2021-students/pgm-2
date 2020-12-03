const RANDOM_USER_ME_API = 'https://randomuser.me/api/?results=100';

(() => {
    const app = {
        initialize() {            
            this.cacheElements();
            this.getDataFromRandomUserMeAPIEndpoint();
        },
        cacheElements() {
            this.$usersList = document.querySelector('.users-list');
        },
        getDataFromRandomUserMeAPIEndpoint() {
            getJSON(RANDOM_USER_ME_API, 
                (data) => {
                    let tempStr = '';
                    data.results.forEach((user) => {
                        tempStr += `
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                            <article class="card">
                                <img src="${user.picture.large}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">${user.email}</li>
                                    <li class="list-group-item">${user.cell}</li>
                                    <li class="list-group-item">${user.location.country}</li>
                                </ul>
                                <div class="card-body">
                                    <a href="#" class="card-link">Card link</a>
                                    <a href="#" class="card-link">Another link</a>
                                </div>
                            </article>
                        </div>
                        `;
                    });
                    this.$usersList.innerHTML = tempStr;
                },
                (error) => {
                    console.log(error);
                });
        }
    };
    app.initialize();
})();