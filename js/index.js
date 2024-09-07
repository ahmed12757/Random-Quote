var quotes = [
  "“Be yourself; everyone else is already taken.”",
  "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
  "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
  "“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”",
  "You miss 100% of the shots you don't take.",
];
var AuthorQuote = [
  "-- Oscar Wilde",
  "-- Marilyn Monroe",
  "-- Albert Einstein",
  "-- Bernard M. Baruch",
  "-- William W. Purkey",
  "--Wayne Gretzy",
];
var randomQuoteElement = document.getElementById("quote");
var randomAutherQuoteElement= document.getElementById("AuthorQuote");
function getRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var randomaother= Math.floor(Math.random() * AuthorQuote.length);
  randomQuoteElement.innerHTML = quotes[randomIndex];
   randomAutherQuoteElement.innerHTML = AuthorQuote[randomIndex];
}
