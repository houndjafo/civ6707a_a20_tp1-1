
const fetch = require('node-fetch');
// url bixi: https://api-core.bixi.com/gbfs/en/station_information.json

const urlBixi = 'https://api-core.bixi.com/gbfs/en/station_information.json';

/*fetch(urlBixi).then(function(response) {
  return response.json().then(function(jsonResponse) {
    console.log(jsonResponse.data.stations[0]);
  });
});*/

const maFonctionAsynchrone = async function() {
  const bixiResponse = await fetch(urlBixi);
  const jsonResponse = await bixiResponse.json();
  return jsonResponse.data.stations[0];
};

const maPromesse = new Promise(function(resolve, reject) {
  const a = 23 + 45;
  resolve(a + 55);
});

maPromesse.then(function(somme) {
  console.log('ma somme est' + somme);
});

maFonctionAsynchrone().then(function(result) {
  console.log(result);
});

console.log('Bonjour');


/*const monArray = [1,2,4,6,8,-3,45,-23];

console.log(monArray.sort(function(a, b) {
  return b - a;
}));

const mesBus = [
  {
    capacite: 25,
    immatriculation: 'A12345'
  },
  {
    capacite: 20,
    immatriculation: 'A01234'
  },
  {
    capacite: 32,
    immatriculation: 'A23456'
  },
  {
    capacite: 12,
    immatriculation: 'A67890'
  }
];

/*console.log(mesBus.sort(function(bus1, bus2) {
  return bus1.capacite - bus2.capacite;
}));*/

/*const plaque = 'A23456';

console.log(mesBus.filter(function(bus) {
  return bus.immatriculation === plaque;
}));*/

//console.log(mesBus);



/*console.log('Bienvenue dans mon TP1');

const fs = require('fs');

const monObjet = {
  a: 34,
  b: 56,
  salut: 'bonjour mon ami!'
};

fs.writeFileSync('bdd.json', JSON.stringify(monObjet));

const contenuDeMonObjet = JSON.parse(fs.readFileSync('bdd.json'));

console.log('mon objet:', contenuDeMonObjet, { bus1: '23', bus2: '45'});

const inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'number',
      name: 'age',
      message: 'Quel est votre âge?'
    },
    {
      type: 'input',
      name: 'nom',
      message: 'Quel est votre nom?'
    }
  ])
  .then(answers => {
    console.log(`Bonjour ${answers.nom}, vous avez ${answers.age} ans. Bienvenue!`);
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
  

  */