const countLetters = function(string) {
  string = string.split(' ').join('')
  const results = {};

  for (const letter of string){

      if (results[letter]){
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }

  }

  return results;
}

console.log(countLetters("lighthouse in the house"));
