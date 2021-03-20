/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

const quotes = [
  {
    // first object
    quote: 'One does not simply walk into Mordor.',
    source: 'Boromir',
    citation: 'Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
    tag: 'film'
  },
  {
    // second object
    quote: 'I am not a cat',
    source: 'Keith Gill (AKA Roaring Kitty)',
    year: 2021,
    tag: 'meme'
  },
  {
    // third object
    quote: 'A lion does not concern himself with the opinion of sheep',
    source: 'Tywin Lannister',
    citation: 'Game of Thrones',
    tag: 'book'
  },
  {
    // fourth object
    quote: 'I used to be an adventurer like you, then I took an arrow to the knee',
    source: 'Whiterun Guard, Skyrim',
    year: 2011,
    tag: 'videogame'
  },
  {
    // fifth object
    quote: 'Do. Or do not. There is no try',
    source: 'Yoda',
    citation: 'Star Wars: The Empire Strikes Back'
  },
  {
    // add more objects if needed
    quote: "It's-a me, Mario!",
    source: 'Mario Mario',
    citation: 'Nintendo'
  }
];

// quotes does not need to be in the function definition as the scope allows it to be seen
function getRandomQuote() {
  let randomNum = Math.floor(Math.random() * (quotes.length)); // random number generated between 0 and the number elements in array
  let randQuote = quotes[randomNum];
  return randQuote;
}

function printQuote() {
  let randomQuote = getRandomQuote(quotes);
  let html = `
  <p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}
  `; // build the HTML string. Leave off the last tag until end of possible data to be added

  // if the objects have further properties, make sure they're displayed. Either way ensure closing <p> tag is added to end of string
    if (randomQuote.citation) {
      html += `<span class="citation">${randomQuote.citation}</span>`;
    } 
    if (randomQuote.year) {
      html += `<span class="year">${randomQuote.year}</span>`;
    }
    if (randomQuote.tag) {
      html += `<span class="tag">${randomQuote.tag}</span>`;
    }
  html += `</p>`;
  
  document.body.style.backgroundColor = `${randomRGB(randomValue)}`;
  document.getElementById('quote-box').innerHTML = html; // select the quote-box div and update it's HTML content with the random quote markup

}

// reusing below 2 functions previously made in a Javascript Loops workspace - changed from arrow function to regular function
function randomValue() {
  return Math.floor(Math.random() * 256);
}
function randomRGB(value) {
  const color = `rgb( ${value()}, ${value()}, ${value()} )`;
  return color;
}

// code structure referenced from https://www.w3schools.com/jsref/met_win_setinterval.asp to remind me how to structure the method 
setInterval(printQuote, 10000); // 10,000ms = 10 second

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);