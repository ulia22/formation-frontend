console.log("01 - Fonctions");
var nombre1 = 10;
var nombre2 = 20;
function additionner(par1, par2){return par1+par2}
console.log(additionner(nombre1, nombre2))
var resultat1 = additionner(nombre1,nombre2)
var somme = additionner
var resultat2 = somme(nombre1, nombre2)
var multiplier = function(nbr1, nbr2){return nbr1*nbr2}
var resultat3 = multiplier(nombre1, nombre2)
var soustraire = function(n1, n2){return n1-n2}
console.log(somme(nombre1, nombre2))
console.log(resultat3)
var afficherOperaton = function(nomOperation,  operation,  nbr1,  nbr2){
  return nomOperation + " [ nb1 == "+nbr1+", nb2 == "+nbr2+"] == "+operation(nbr1, nbr2)
}
console.log(afficherOperaton("Additionner", somme, 20, 40))
console.log(afficherOperaton("Multiplier", multiplier, 10, 20))
console.log(afficherOperaton("Soustraire", soustraire, 15, 5))
