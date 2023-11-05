import Biscuit from "../assets/blog/biscuits.jpg";
import Chicken from "../assets/blog/chicken.jpg";
import Cookies from "../assets/blog/cookies.jpg";

export const recipes = [
  {
    title: "Medeni ovseni piškoti",
    image: Cookies,
    ingredients: [
      "1 dl cvetličnega medu",
      "150 g ovsenih kosmičev",
      "50 g suhih brusnic",
      "50 g mandljev",
    ],
    steps: [
      "V večji posodi zmešajte ovsene kosmiče, suhe brusnice in mandlje.",
      "Dodajte cvetlični med in dobro premešajte, da se sestavine dobro prepojijo.",
      "Zmes enakomerno razporedite v pekač, ki ste ga obložili s papirjem za peko.",
      "Pecite v pečici segreti na 180°C približno 20 minut, da se zmes zlato rjavo zapeče.",
      "Ohladite, nato narežite na kvadrate in postrezite.",
    ],
    time: "30 min",
    persons: 4,
  },
  {
    title: "Medena piščančja marinada",
    image: Chicken,
    ingredients: [
      "2 žlici cvetličnega medu",
      "4 piščančje prsi",
      "1 limona",
      "2 stroka česna",
      "2 žlici sojine omake",
    ],
    steps: [
      "V majhni skledi zmešajte cvetlični med, sojino omako, sok iz limone in strt česen.",
      "Narezane piščančje prsi položite v skledo in prelijte z mešanico medu.",
      "Pustite, da se piščanec marinira vsaj 30 minut.",
      "Segrejte ponev na srednji vročini in pecite piščančje prsi, dokler niso kuhane in zlato rjave z obeh strani.",
      "Postrezite s prilogo po izbiri.",
    ],
    time: "45 min",
    persons: 2,
  },
  {
    title: "Medeni ovseni kvadratki",
    image: Biscuit,
    ingredients: [
      "3 skodelice ovsenih kosmičev",
      "1/2 skodelice cvetličnega medu",
      "1/2 skodelice arašidovega masla",
      "1 čajna žlička vanilijevega ekstrakta",
      "1/2 skodelice sesekljanih oreščkov",
    ],
    steps: [
      "V veliki posodi zmešajte ovsene kosmiče in sesekljane oreščke.",
      "V majhni posodi segrejte cvetlični med, arašidovo maslo in vanilijev ekstrakt ter dobro premešajte.",
      "Mešanico medu prelijte nad ovsene kosmiče in dobro premešajte, da se vse sestavine dobro prepojijo.",
      "Zmes razporedite v pekač, ki ste ga obložili s papirjem za peko, in enakomerno poravnajte.",
      "Pustite, da se ohladi in strdi, nato narežite na kvadrate.",
    ],
    time: "25 min",
    persons: 8,
  },
];
