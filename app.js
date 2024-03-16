let factorialize = (x) => {
  let product = 1;
  for (let i = 1; i <= x; i++) {
    product = product * i;
  }
  return product;
};

// console.log(factorialize(4))

function getLongestWord(sentence) {
  // Split the sentence into an array of words
  const words = sentence.split(" ");

  let longestLength = 0;
  for (const word of words) {
    // Update longestLength if the current word's length is greater
    if (word.length > longestLength) {
      longestLength = word.length;
    }
  }

  // Return the length of the longest word
  return longestLength;
}

function titleize(sentence) {
  // Split the sentence into an array of words
  const words = sentence.split(" ");

  const titleizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  const titleizedSentence = titleizedWords.join(" ");

  return titleizedSentence;
}
