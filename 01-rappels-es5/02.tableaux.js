var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans']

villes.forEach(v => console.log(v))
var lettreADansToutesLesVilles = villes.every(v => v.includes("a"))
console.log(lettreADansToutesLesVilles);
var auMoinsUneVilleAvecUnTiret = villes.some(v => v.includes("-"))
console.log(auMoinsUneVilleAvecUnTiret);
var villesSansTiretSansEspace = villes.filter(v => !v.includes("-") && !v.includes(" "))
console.log(villesSansTiretSansEspace);
var villesMajusculeSeTerminantParS = villes.filter(v => v.slice(v.length-1, v.length) == "s").map(v => v.toLocaleUpperCase())
console.log(villesMajusculeSeTerminantParS);
