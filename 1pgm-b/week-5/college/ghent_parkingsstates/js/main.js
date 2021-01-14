const GHENT_PARKINGS_API =
  "https://data.stad.gent/api/records/1.0/search/?dataset=bezetting-parkeergarages-real-time&q=&facet=description";

void (() => {
  const app = {
    initialize() {
      //console.log("1. Application started!");
      this.prevParkings;
      this.parkings;
      this.cacheElements();
      this.registerListeners();
      this.buildParkingsUI();
      setInterval(async (ev) => {
        await this.buildParkingsUI();
      }, 30000);
    },
    cacheElements() {
      //console.log("2. Cache elements!");
      this.$parkingsList = document.querySelector(".parking-list");
    },
    registerListeners() {
      // console.log("3. Register listeners!");
    },
    async buildParkingsUI() {
      this.prevParkings = this.parkings;
      this.parkings = await this.fetchGhentParkings();
      this.$parkingsList.innerHTML = this.generateHTMLForParkings(
        this.parkings
      );
    },
    generateHTMLForParkings(parkings) {
      parkings.sort((p1, p2) => p1.fields.name > p2.fields.name);
      return parkings
        .map((parking) => {
          const perc = Math.round(
            (parking.fields.availablecapacity / parking.fields.totalcapacity) *
              100
          );
          return `
        <li class="parking-list__item">
          <h2 class="name">${parking.fields.name}</h2>
          <span class="info">${parking.fields.address}</span>
          <span class="capacity ${this.getClassnameBasedOnPercentage(perc)}">${
            parking.fields.availablecapacity
          }</span>
          ${this.getHTMLForIndicator(this.prevParkings, parking)}
        </li>
        `;
        })
        .join("");
    },
    async fetchGhentParkings() {
      const response = await fetch(GHENT_PARKINGS_API);
      const obj = await response.json();
      const parkings = obj.records;
      return parkings;
    },
    getClassnameBasedOnPercentage(perc) {
      let tempStr = "capacity--ok";
      if (perc < 20) {
        tempStr = "capacity--danger";
      } else if (perc >= 20 && perc < 60) {
        tempStr = "capacity--warning";
      }
      return tempStr;
    },
    getHTMLForIndicator(prevParkings, parking) {
      let tempStr = '<span class="trend">';
      if (prevParkings === undefined) {
        tempStr += "=";
        tempStr += "</span>";
        return tempStr;
      }

      const prevParking = prevParkings.find(
        (p) => p.fields.name === parking.fields.name
      );
      if (
        parking.fields.availablecapacity > prevParking.fields.availablecapacity
      ) {
        tempStr += "🠛";
      } else if (
        parking.fields.availablecapacity > prevParking.fields.availablecapacity
      ) {
        tempStr += "🠙";
      } else {
        tempStr += "=";
      }
      tempStr += "</span>";
      return tempStr;
    },
  };

  if(typeof exports === "object"){
      //module.exports is een object (bestaat)
      //we zijn in NodeJS
      module.exports = app;
  }else{
    app.initialize();
  }

  
})();
