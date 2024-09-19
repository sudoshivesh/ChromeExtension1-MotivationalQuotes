// Array of motivational quotes
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "Your time is limited, don’t waste it living someone else’s life. - Steve Jobs",
    "Success is how high you bounce when you hit bottom. - George S. Patton",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
    "Failure is the opportunity to begin again more intelligently. - Henry Ford",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "It always seems impossible until it’s done. - Nelson Mandela",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "Don’t be afraid to give up the good to go for the great. - John D. Rockefeller",
    "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "If you really want to do something, you'll find a way. If you don't, you'll find an excuse. - Jim Rohn"
  ];
  
  // Function to select and display a random quote
  function displayRandomQuote() {
    // Generate a random index between 0 and the length of the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    // Select the quote at the generated random index
    const randomQuote = quotes[randomIndex];
    
    // Display the selected quote in the element with id="quote"
    document.getElementById('quote').innerText = randomQuote;
  }
  
  // Call the displayRandomQuote function when the page is loaded
  window.onload = displayRandomQuote;
  