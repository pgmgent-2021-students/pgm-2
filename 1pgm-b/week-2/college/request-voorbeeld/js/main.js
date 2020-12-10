const apikey ='' //plak hier je api key
const apiURL = 'https://data.stad.gent/api/records/1.0/search/?dataset=straten-mondmaskerplicht-gent&apikey='+apikey;

const $straatnamen = document.querySelector('#straatnamen');
//Stap 1: nieuw XMLHttpRequest object aanmaken
// Nodig voor request te versturen
// AJAX
const xhr = new XMLHttpRequest();
// 2. onze response type declareren.
xhr.responseType = 'json';
// 3. luisteren naar statuswijziging van de request (denk aan eventlisteners)
xhr.onreadystatechange = () => {
  switch (xhr.readyState) {
    case 1:
      console.log('opened connection');
      break;
    case 2:
      console.log('headers ontvangen');
      break;
    case 3:
      console.log('loading data...');
      break;
    case 4:
      console.log('DATA GELADEN!');
      if (xhr.status === 200) {
        //status is OK
        //is data ok?
        //data: zit in xhr.response
        const data = !xhr.responseType ? JSON.parse(xhr.response) : xhr.response;
        console.log(data);
        $straatnamen.innerHTML = data.records.map((record) => record.fields.straatnaam).join('<br>');
      }
  }
};
// 4. effectief openen van ons request: connectie openen naar server via URL
xhr.open('GET', apiURL, true);
// 5. vesturen van effectieve request
xhr.send(null);
