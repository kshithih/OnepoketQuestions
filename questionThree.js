// Create a Node.js script that reads a text file named "data.txt" and counts the number of words in it. The script should print the total word count to the console.

const fs = require('fs');

const filename = 'data.txt';

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err.message);
  } else {
    const wordCount = countWords(data);
    console.log(`Total word count: ${wordCount}`);
  }
});

function countWords(text) {
  const trimmedText = text.trim();

  
  const words = trimmedText.split(/\s+/);

  const filteredWords = words.filter((word) => word !== '');

  return filteredWords.length;
}

