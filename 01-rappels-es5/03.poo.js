var Personne = function(nom, prenom, pseudo){
  this.nom = nom,
  this.prenom = prenom,
  this.pseudo = pseudo,
  this.getNomComplet = function(){
    return this.nom + " " + this.prenom + " " + this.pseudo
  }
}
var jules = new Personne("LEMAIRE", "Jules", "jules77");
var paul = new Personne("LEMAIRE", "Paul", "paul44");
console.log(jules.prenom+" "+ jules.nom + " "+jules.pseudo+" "+jules.getNomComplet());
console.log(paul.prenom+" "+ paul.nom + " "+paul.pseudo+" "+paul.getNomComplet());
var afficherPersonne = function(p){for (var variable in p) {
  if (p.hasOwnProperty(variable) && !(typeof(p[variable]) === 'function') ) {console.log(p[variable]); }
  else{console.log(p[variable]());}
}}
afficherPersonne(paul);
jules.pseudo = "jules44"
afficherPersonne(jules);
console.log(jules.age);
Personne.prototype.age = 'NON RENSEIGNE';
console.log(jules.age);
jules.age = 30;
console.log(jules.age);
Personne.prototype.getInitiales = function(){
  return this.nom.charAt(0)+""+this.prenom.charAt(0)
}
console.log(jules.getInitiales());
var Robert = {
  prenom : 'robert',
  nom : 'LEPREFET',
  pseudo : 'robert77',
  getNomComplet : function(){
    return this.nom + " " + this.prenom + " " + this.pseudo
  }
}
afficherPersonne(Robert);

function Client(nom, prenom, pseudo, numeroClient){
    Personne.call(this, nom, prenom, pseudo),
    this.numeroClient = numeroClient,

    this.getInfos = function(){
        return this.numeroClient + ' ' +this.nom + ' ' + this.prenom
    }
}


var steve = new Client('Steve', 'LUCAS', 'steve44', 'A01')

afficherPersonne(steve)

console.log('Numero client : ' + steve.numeroClient)

console.log('Infos de Steve : ' + steve.getInfos())
