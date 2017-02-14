$(document).ready(function(){

  var beers = [];

  var addBeer = function(name, category, rating) {
    var newBeer = {
      "name": name,
      "category": category,
      "rating": rating
    };
    beers.push(newBeer);
  };

  var updateBeers = function () {
      $('.beers-list').empty();

      for (i=0; i<beers.length; i++) {
        $('.beers-list').append("<p>" + beers[i].name + " (" + beers[i].category + ") - Rating: " + beers[i].rating + "</p>");
      }
  };

  $('.post-beer').on('click', function(){
      var beerName = $('.beer-input').val();
      var beerCat = $('.category-input').val();
      var beerRating = $('.rating-input').val();
      addBeer(beerName, beerCat, beerRating);
      updateBeers();
  });

  console.log(beers);

});
