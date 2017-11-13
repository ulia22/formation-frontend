let favoriteCityId = "rome"
console.log(favoriteCityId);
favoriteCityId = "paris"
console.log(favoriteCityId);
const citiesId = ["paris", "nyc", "rome", "rio-de-janero"]
console.log(citiesId);
/*Test re-affectation constante ne marche pas, erreur retournée ci-dessous
citiesId = "Test re-affectation constante"
TypeError: Assignment to constant variable.
at Object.<anonymous> (C:\Users\ETY9\Documents\Frontend\TP02\04-es2015\app.js:7:10)
at Module._compile (module.js:570:32)
at Object.Module._extensions..js (module.js:579:10)
at Module.load (module.js:487:32)
at tryModuleLoad (module.js:446:12)
at Function.Module._load (module.js:438:3)
at Module.runMain (module.js:604:10)
at run (bootstrap_node.js:383:7)
at startup (bootstrap_node.js:149:9)
at bootstrap_node.js:496:3*/

citiesId.push("Tokyo")
console.log(citiesId);

//Création d'Object
function getWeather(cityId){
  let city = cityId.toLocaleUpperCase()
  let temperature = 20
  return {city:city, temperature:temperature}
}
console.log(getWeather("Paris"));
const weather = getWeather(favoriteCityId)
console.log(weather);

//Affectation destructuré
const {
  city : nomCity,
  temperature : tempeCity
} = getWeather("Paris");
console.log(nomCity);
console.log(tempeCity);

//Rest operator
const [parisId, nycId, ...othersCitiesId] = citiesId
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

//Classe
class Trip{
  constructor(id, name, imageUrl){
    this.id = id
    this.name = name
    this.imageUrl = imageUrl
  }
  static getDefaultTrip(){
    return new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro')
  }

  get price(){
    return this._price;
  }

  set price(price){
    this._price = price
  }
}
let parisTrip = new Trip("paris", "Paris", "img/paris.jpg")
console.log(parisTrip);
console.log(parisTrip.name);
Trip.prototype.toString = function(){
  return `Trip[${this.id}, ${this.name}, ${this.imageUrl}, ${this.price}]`
}
parisTrip.price = 100
console.log(parisTrip.toString());
const defaultTrip = Trip.getDefaultTrip()
console.log(defaultTrip.toString());

//Héritage

class FreeTrip extends Trip{
  constructor(id, name, imageUrl){
    super(id,name,imageUrl)
    this.price = 0;
  }

  toString(){
    return 'Free'+super.toString()
  }
}
const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg');
console.log(freeTrip.toString());

//Promise, Set, Map, Arrow Function
class TripService {
  constructor() {
    this.tripSet = new Set()
    this.tripSet.add(new Trip('paris', 'Paris', 'img/paris.jpg'))
    this.tripSet.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'))
    this.tripSet.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'))
  }

  findByName(tripName) {
    return new Promise((resolve, reject) =>{
      setTimeout(() => {
        let tripToReturn
        for (var trip of this.tripSet.values()) {
          if(trip.name === tripName){
            tripToReturn = trip
          }
        }
        if(tripToReturn){
          resolve(tripToReturn)
        }else{
          reject(`No trip with name ${tripName}.`);
        }
      }, 2000)
    })
  }
}
class PriceService {
  constructor() {
    this.tripMap = new Map();
    this.tripMap.set('paris', 100);
    this.tripMap.set('rio-de-janeiro', 100);
  }
  findPriceByTripId(tripId) {
    return new Promise((resolve, reject) =>{
      setTimeout(() => {
        let priceTrip = this.tripMap.get(tripId)
        if(priceTrip){
          resolve(priceTrip)
        }else{
          reject(`No price found for id ${tripId}.`);
        }
      }, 2000)
    })
  }
}

let tripServ = new TripService();
let priceTrip = new PriceService();

const req1 = tripServ.findByName('Paris')
req1.then((trip)=>{
  console.log(trip.toString());
},
(erreur)=>{console.log(erreur);})

const req2 = tripServ.findByName('Toulouse')
req2.then((trip)=>{
  console.log(trip.toString());
},
(erreur)=>{console.log(erreur);})

const req3 = tripServ.findByName('Rio de Janeiro')
.then((trip)=>{
  return priceTrip.findPriceByTripId(trip.id)
})
.then((id)=>{console.log(id)})
.catch((err)=>{console.log(err)});
