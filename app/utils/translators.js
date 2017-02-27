translators = {
  
  pigLatin: function (string) {
  	
  	const vowels = new RegExp(/^[aeiouy]$/i);
  	const punctuation = new RegExp(/[.,\/#!$%\^&?\*;:{}=\-_`~()]/g);
  	var splitString = string.split(" ");
  	for (let i = 0; i < splitString.length; i++) {
  	  var word = splitString[i];
  	  var firstLetter = splitString[i][0];
  	  if (punctuation.test(word)) {
  	    var punc = (word.match(punctuation))[0];
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
  	  } else {
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
  	  }
  	  
  	}
  	return splitString.join(" ");

  },

  otherLanguage: function (string) {
  	console.log(string + " in other lanauge")
  } 

}

module.exports = translators;