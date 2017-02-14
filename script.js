$(document).ready(function(){

  var beers = [];

  var addBeer = function(name, category) {
    var newBeer = {
      "name": name,
      "category": category
    };
    beers.push(newBeer);
  };

  $('.post-beer').on('click', function(){
      var beerName = $('.beer-input').val();
      var beerCat = $('.category-input').val();
      addBeer(beerName, beerCat);
  });

  console.log(beers);

});
