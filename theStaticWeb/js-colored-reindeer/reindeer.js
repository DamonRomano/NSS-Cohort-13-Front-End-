var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine",
              "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];

var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid",
                "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredReindeer");

// Your task is to loop through all the reindeer in the array,
// and add the name of the reindeer to the single HTML <div> element provided.
// The name of the reindeer should be prepended with the corresponding color
// from the other array.

// For example:

// Blue Dasher
// Red Dancer
// etc...


if (reindeer.length < colors.length) {
  for (var i = 0; i < reindeer.length; i++) {
    console.log( colors[i], reindeer[i] );
  }
} else {
      for (var i = 0; i < colors.length; i++){
      console.log( colors[i], reindeer[i] );
    }
  }
