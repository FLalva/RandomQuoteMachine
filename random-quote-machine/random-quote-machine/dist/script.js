import $ from "https://cdn.skypack.dev/jquery@3.6.0";

var quotes = [
  "To tell the truth I'm terrified",
  "I don't directions from nobody in the backseat",
  "Joe Pesci's my spirit animal",
  'You know nothing, Jon Snow',
  "'I ain't no pussy",
  'The south will rise again, feller',
  'I love Cupcakes',
  "I'm just being me, what you tryna hate for?",
  "I swear I'm not a violent guy, once upon a time I bought a super soaker to a drive by",
  'SMH my head',
  'All the silence is worse than all the voilence',
  'Miss me with that bullshit',
  'Watch Iggy win a grammy as I try to crack a smile',
  "I'm really too young to be feeling this old",
  'Last name Ever, first name Greatest',
  'Bitch you thirsty, please grab a Sprite'
];
var authors = [
  'J. Cole',
  'NF',
  'Big Lenbo',
  'Ygritte',
  'KYR SP33DY',
  'Deluxe4',
  'Eminem',
  'Hopsin',
  'Logic',
  'SideArms',
  'Lupe Fiasco',
  'Kendrick Lamar',
  'J. Cole',
  'Drake',
  'Drake',
  'Vince Staples',
];

function newQuote() {
  //randomly pick a number from 0 to array length
  //use inner html to put into page
  //twitter
  var num = Math.floor(Math.random() * quotes.length);
  
  document.getElementById("text").innerHTML = quotes[num]
  document.getElementById("author").innerHTML = "- " + authors[num]
  
  //tweet
  $('#tweet-quote').attr(
    'href',
    'https://twitter.com/intent/tweet?hashtags=quotes&text=' +
      encodeURIComponent('"' + quotes[num] + '" ' + authors[num])
  );
}

$( document ).ready(function() {
    newQuote();
});

$('#new-quote').on('click', newQuote);