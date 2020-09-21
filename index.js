console.log('Bienvenue dans mon TP1');

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
  