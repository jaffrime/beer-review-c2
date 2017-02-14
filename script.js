$(document).ready(function(){

  var beers = [];
  var sortDescending = false; //sort marker

  var addBeer = function(name, category, rating) {
    var newBeer = {
      "name": name,
      "category": category,
      "rating": rating
    };
    beers.push(newBeer);
    sortDescending = false;
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

  $('.sort-beer').on('click', function(){
      if (!sortDescending) {
        sortDescending = true;
        beers.sort(function(a,b) {
          return b.rating - a.rating;
        })
      } else {
        sortDescending = false;
        beers.sort(function(a,b) {
          return a.rating - b.rating;
        })
      }
      updateBeers();
    });

  console.log(beers);

});
