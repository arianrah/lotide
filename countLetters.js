const countLetters = function(string) {
  let newStr = string.replace(/ /g, '')
  let stringToArray = [];
  //console.log(newStr);

  //string to array
  for (let i = 0; i < newStr.length; i++) {
    stringToArray.push(newStr.charAt(i));
  }

  console.log(stringToArray);
}

countLetters("lighthouse in the house")
