var myCards = document.getElementById('container');
var resultsArray = [];
var counter = 0;
var text = document.getElementById('text');
var images = [
  'sass', 
  'git', 
  'gulp', 
  'css', 
  'grunt'
];

var clone = images.slice(0); // duplicate array
var cards = images.concat(clone); // merge to arrays 

// Shuffle function
function shuffle(o){
//   for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i],   o[i] = o[j], o[j] = x);
  for(let i = o.length; i; i--){
    let j = Math.floor(Math.random() * i);
    let x = o[--i];
    o[i] = o[j];
    o[j] = x;
  }
  return o;
}
shuffle(cards);

// Insert cards into the DOM

//schedule change of class

// Check for win

