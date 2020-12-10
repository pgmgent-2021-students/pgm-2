const helper = require('./myCustomModule.js')

console.log(helper) //helper is een object

const comments = [
    {
      nickName: 'Joris748',
      message: 'Nice, goede iteratie van de Z6 en Z7. Veel van de kritiekpunten zijn aangepakt',
      comments: [
        {
          nickName: 'JaPPa03',
          message: 'Als de APS-C crop voor 4K/60 op de Z6 geen probleem voor je is, is het zeker een mooie upgrade.'
        },
        {
          nickName: 'litebyte',
          message: 'Wel jammer dat de resolutie van de electronische zoeker niet is verhoogd.'
        }
      ]
    },
    {
      nickName: 'Inoble',
      message: 'Persoonlijk vind ik het toch een gemiste kans voor filmmakers. Nu zal die markt niet voornamelijk bij Nikon liggen maar ze zorgen er naar mijn idee toch voor dat ze zichzelf buiten spel zetten door de wensen te honoreren maar een cropfactor in te brengen',
      comments: [
        {
          nickName: 'JaPPa03',
          message: 'In feite zijn deze camera’s een soort update die je doorgaans na interne feedback zou doorvoeren voordat je een product op de markt brengt. Vooral de dual card slot is iets wat ze verkeerd hebben ingeschat terwijl het geen nieuwe kritiek is op camera’s.',
          comments: [
            {
              nickName: 'Inoble',
              message: 'Precies dat idee heb ik ook, een gevalletje D600, 800 > 610, 810. An sich natuurlijk een prima camera en feitelijk (aannemend) beter dan de voorgangers maar een upgrade niet waard wanneer je met Nikon schiet en graag bij Nikon wilt blijven.'
            }
          ]
        },                
      ]
    }
  ];
console.log(helper.uppercase(JSON.stringify(comments,null,2)));
  