//
// TODO: implement the logic to decide whether or not to make a trade
//game, news, money, fun, good, actor, movies, tech, music, people, apple, google
function decideWhetherOrNotToTrade(tweet){
  
  var buy = false
  var game = _.includes(tweet,'game') //bad
  var news = _.includes(tweet,'news') // good
  var money = _.includes(tweet,'money') //bad
  var fun = _.includes(tweet,'fun') //good
  var good = _.includes(tweet,'good') //bad 
  var actor = _.includes(tweet,'actor') //good
  var movies = _.includes(tweet,'movies') //
  var tech = _.includes(tweet,'tech') //does nothing
  var music = _.includes(tweet,'music') //bad
  var people = _.includes(tweet,'people')//good
  var apple = _.includes(tweet,'apple')//good
  var google = _.includes(tweet,'google')//good
  if(bank.currency == 'USD'){
  	if ( news || fun || actor || movies || people || apple || google){
  		buy = true
  	}
  	else{
  		buy = false
  	}
  }
  return buy
}
