const GDM_GHENT_PORTFOLIO_API = 'https://www.gdm.gent/static/data/cases.json';

(() => {
  const app = {
    initialize () {
      this.cacheElements();
      this.fetchGhentPortfolioApi();
    },
    cacheElements () {
      this.$portfolioList = document.querySelector('.portfolio-list');
    },
    async fetchGhentPortfolioApi () {
      // fetch(GDM_GHENT_PORTFOLIO_API)
      //   .then((response) => response.json())
      //   .then((data) => console.log(data));
      try {
        const response = await fetch(GDM_GHENT_PORTFOLIO_API);
        const jsonData = await response.json();
        this.updateGhentPortfolioUi(jsonData);
      } catch(error) {
        console.error(error);
      }
      
    },
    updateGhentPortfolioUi (data) {
      this.$portfolioList.innerHTML = data.map(project => {
        return `
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <article class="card">
                <img src="${project.Picture}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${project.Title}</h5>
                    <p>${project.Description}</p>
                </div>
            </article>
        </div>
        `
      }).join('');
    }
  }
  app.initialize();
})();