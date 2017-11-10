const readline = require('readline');
service = require('./services')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var menu =
{
  option :
  {
      "1" :
      {
        libelle : "1. Liste de tous les présentateurs",
        execute : function()
        {
          for (var p in service.listerTousLesPresentateurs()) {
            console.log(service.listerTousLesPresentateurs()[p].firstname+" "+service.listerTousLesPresentateurs()[p].lastname);
          }
        }
      },
      "2" :
      {
        libelle : "2. Top présentateurs",
        execute : function()
        {
          for (var p in service.listerTopPresentateurs()) {
            console.log(service.listerTopPresentateurs()[p].firstname+" "+service.listerTopPresentateurs()[p].lastname);
          }
        }
      },
      "3" :
      {
        libelle : "3. Liste des sessions",
        execute : function()
        {
          for (var p in service.listerToutesLesSessions()) {
            console.log(service.listerToutesLesSessions()[p].title);
          }
        }
      },
      "4" :
      {
        libelle : "4. Détail d'une session",
        execute : function(id)
        {
          console.log(service.trouverUneSession(id)[0].title);
        }
      }
  }
}

function displayMenu(){
  console.log('*** Application Conférence ***');
  for (var indice in menu.option) {
    console.log(menu.option[indice].libelle);
  }
}

function execMenu(val){
  console.log();
  for (var indice in menu.option) {
    if (indice === val) {
      menu.option[indice].execute();
    }
    else if(indice === val.charAt(0))
    {
      console.log(val.substr(1).trim());
      menu.option[indice].execute(val.substr(1).trim());
    }
  }
}

(function(){
  displayMenu()
  rl.question( 'Saisie :', (answer) => {
    execMenu(answer)
    rl.close();
  });
})();
