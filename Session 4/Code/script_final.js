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

var clone = images.slice(0); // Duplicate array
var cards = images.concat(clone); // Merge the two arrays 

// Shuffle function
function shuffle(o){
  // for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i],   o[i] = o[j], o[j] = x);
  //writing the above in a sensible manner
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
for (var i = 0; i < cards.length; i++) {
  var card = document.createElement('div');
  card.dataset.item = cards[i];
  card.dataset.view = "card";
  myCards.appendChild(card);
     
  card.onclick = function () {
    if (this.className != 'flipped' && this.className != 'correct'){
        this.className = 'flipped';
        var result = this.dataset.item;
        resultsArray.push(result);
    }

    if (resultsArray.length > 1) {
      if (resultsArray[0] === resultsArray[1]) {
        schedule_change("correct");
        counter ++;
        win();
        resultsArray = [];
      } else {
        schedule_change("reverse");
        resultsArray = [];
      } 
    } 
  }
};


var schedule_change = function(className) {
  var x = document.getElementsByClassName("flipped");
  
  // Call the function after some interval of time.
  setTimeout(function() {
    for(var i = (x.length - 1); i >= 0; i--) {
      x[i].className = className;
    }   
  },500);
}

// Check if player has won (matched all cards).
var win = function () {
  if(counter === 5) {
    text.innerHTML = "Your Won!!! Refresh to play again";
  } 
}
