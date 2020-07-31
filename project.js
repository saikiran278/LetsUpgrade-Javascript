function Quote(text, author, source) {
    this.text = text;
    this.author = author;
    this.source = source
  }
  
  var currentIndex = 0;
  
  var quote1 = new Quote('"Wise men speak because they have something to say; Fools because they have to say something."', 'Plato', '');
  var quote2 = new Quote('"It is not death that a man should fear, but he should fear never beginning to live."', 'Marcus Aurelius', 'Meditations');
  var quote3 = new Quote('"Very little is needed to make a happy life; it is all within yourself, in your way of thinking."', 'Marcus Aurelius', 'Meditations');
  var quote4 = new Quote('"The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time."', 'Mark Twain', '');
  var quote5 = new Quote('"I think the devil doesn\'t exist, but man has created him, he has created him in his own image and likeness."', 'Fyodor Dostoyevsky', 'The Brothers Karamazov');
  var quote6 = new Quote('“The mystery of human existence lies not in just staying alive, but in finding something to live for.”', 'Fyodor Dostoyevsky', 'The Brothers Karamazov');
  var quote7 = new Quote('NESTOR: "I have to follow the dictates of hateful old age"', 'Homer', 'Iliad');
  var quote8 = new Quote('ANTONIUS BLOCK: "I want to confess as honestly as I can, but my heart is empty. And Emptiness is a mirror turned to my own face. I see myself... and am seized by disgust and fear. Through my indifference for people, I\'ve been placed outside of their society. Now I live in a ghost world, enclosed in my dreams and imaginings."', 'Ingmar Bergman', 'The Seventh Seal');
  var quote9 = new Quote('ANTONIUS BLOCK: "We must make an idol of our fear and that idol we shall call God"', 'Ingmar Bergman', 'The Seventh Seal');
  var quote10 = new Quote('JOHN WILMOT:"Elegance and interest...all very well in their own way, but what do they illuminate?"', 'Stephen Jeffreys', 'The Libertine');
  var quote11 = new Quote('"Yesterday, upon the stair, I met a man who wasn\'t there. He wasn\'t there again today, I wish, I wish he\'d go away..."', 'Hughes Mearns', 'Antigonish');
  var quote12 = new Quote('“Where is the wisdom we have lost in knowledge? Where is the knowledge we have lost in infomation?”', 'T.S. Eliot', 'Choruses from the Rock');
  var quote13 = new Quote('“Look back now and consider how the bygone ages of eternity that elapsed before our birth were nothing to us. Here, then, is a mirror in which nature shows us the time to come after our death. Do you see anything fearful in it? Do you perceive anything grim? Does it not appear more peaceful than the deepest sleep?”', 'Lucretius', 'On The Nature of Things');
  var quote14 = new Quote('“Let death and exile and everything that is terrible appear before your eyes every day, especially death; and you will never have anything contemptible in your thoughts or crave anything excessively.”', 'Epictetus', 'The Handbook');
  var quote15 = new Quote('“You seek for knowledge and wisdom, as I once did; and I ardently hope that the gratification of your wishes may not be a serpent to sting you, as mine has been.”', 'Mary Shelley', 'Frankenstein');
  var quote16 = new Quote('“I got the boogie for the doctor, I got the boogie for the nurse. Got to keep on buggin\', \'til they throw me in a hearse!”', 'Dr Isayah Ross', 'Boogie Disease');
  var quote17 = new Quote('“A man cannot be comfortable without his own approval.”', 'Mark Twain', '');
  var quote18 = new Quote('“There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will."', 'Epictetus', 'The Handbook');
  var quote19 = new Quote('"Wealth consists not in having great possessions, but in having few wants."', 'Epictetus', 'The Handbook');
  var quote20 = new Quote('"Make the best use of what is in your power, and take the rest as it happens."', 'Epictetus', 'The Handbook');
  var quote21 = new Quote('"We all start off as strangers"', 'unknown', 'From a lunchroom wall in Baarn (NL)');
  var quote22 = new Quote('"Do not mistake the rule of force for true power. Men are not shaped by force.”','Euripides','The Bacchae');
  var quote23 = new Quote('"Cleverness is not wisdom.”','Euripides','The Bacchae');
  var quote24 = new Quote('“He who believes needs no explanation.”','Euripides', 'The Bacchae');
  var quote25 = new Quote('“Talk sense to a fool and he calls you foolish.”', 'Euripides', 'The Bacchae');
  var quote26 = new Quote('“We spoil ourselves with scruples long as things go well.”', 'Aeschylus', 'Oresteia');
  var quote27 = new Quote('“Money is numbers and numbers never end. If it takes money to be happy, your search for happiness will never end."', 'Robert Nesta Marley', '');
  
  var quoteCollection = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9, quote10, quote11, quote12, quote13, quote14, quote15, quote16, quote17, quote18, quote19, quote20, quote21, quote22, quote23, quote24, quote25, quote26, quote27];
  
  function generateRandomQuote() {
    var randomQuoteIndex = getRandomIntInclusive(0, quoteCollection.length);
  
    while (randomQuoteIndex === currentIndex) {
      randomQuoteIndex = getRandomIntInclusive(0, quoteCollection.length)
    }
  
    currentIndex = randomQuoteIndex;
  
    var randomQuote = quoteCollection[randomQuoteIndex];
  
    return randomQuote
  }
  
  function showRandomQuote(randomQuote) {
    document.getElementById('quote').innerHTML = randomQuote.text;
    document.getElementById('author').innerHTML = randomQuote.author;
    document.getElementById('source').innerHTML = randomQuote.source
  }
  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  
  function getRandomQuote() {
    var randomQuote = generateRandomQuote();
    showRandomQuote(randomQuote)
  }
  
  function shareTwitter() {
    var Text = document.getElementById('quote').innerHTML + " - " + document.getElementById('author').innerHTML + ", " + document.getElementById('source').innerHTML;
  }
  
  document.addEventListener('DOMContentLoaded', getRandomQuote);
  document.getElementById('new-quote-button').addEventListener('click', getRandomQuote);
  