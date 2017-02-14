$(document).ready(function(){

  var beers = [];

  var addBeer = function(name, category) {
    var newBeer = {
      "name": name,
      "category": category
    };
    beers.push(newBeer);
  };

  var updateBeers = function () {
      $('.beers-list').empty();

      for (i=0; i<beers.length; i++) {
        $('.beers-list').append("<p>" + beers[i].name + ": " + beers[i].category + "</p>");
      }
  };

  $('.post-beer').on('click', function(){
      var beerName = $('.beer-input').val();
      var beerCat = $('.category-input').val();
      addBeer(beerName, beerCat);
      updateBeers();
  });

  console.log(beers);

});
