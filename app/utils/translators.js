translators = {
  
  pigLatin: function (string) {
  	
  	const vowels = new RegExp(/^[aeiouy]$/i);
  	const punctuation = new RegExp(/[.,\/#!$%\^&?\*;:{}=\-_`~()]/g);
  	var splitString = string.split(" ");
  	for (let i = 0; i < splitString.length; i++) {
  	  var word = splitString[i];
  	  var firstLetter = splitString[i][0];
      if (firstLetter && firstLetter == firstLetter.toUpperCase()) {
        var capital = true;
      }
  	  if (punctuation.test(word)) {
  	    var punc = (word.match(punctuation)).join('');
  	    word = word.replace(punctuation, "");
  	  }
  	  if (vowels.test(firstLetter)) {
  	    if (word.length > 1) {
  	      if (punc) {
  	        splitString[i] = word + 'way' + punc;
  	        punc = '';
  	      } else {
  	        splitString[i] = word + 'way';
  	      }
  	    }
        if (capital) {
          splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
          capital = false;
        }
  	  } else {
        word = word.toLowerCase();
  	    for (let j = 0; j < word.length; j++) {
  	      if (vowels.test(word[j])) {
  	        if (punc) {
  	          splitString[i] = word.slice(j) + word.slice(0, j) + 'ay' + punc;
  	          punc = '';
  	        } else {
  	          splitString[i] = word.slice(j) + word.slice(0, j) + 'ay';
  	        }
  	        break;
  	      }
  	    }
        if (capital) {
          splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
          capital = false;
        }
  	  }
  	  
  	}
  	return splitString.join(" ");

  },

  izzle: function (string) {
    var splitString = string.split(" ");

    for (let i = 0; i < splitString.length; i++) {
      if (splitString[i] !== '') {
        splitString[i] = splitString[i] + 'izzle';
      }
    }
    return splitString.join(' ');
  } 

}

module.exports = translators;