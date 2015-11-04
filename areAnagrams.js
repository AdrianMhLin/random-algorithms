//make a program to see if two words are anagrams of each other

function isAnagram(arrayOfWords){

	if ( !areEqualLengths(arrayOfWords) ){
		console.log('different lengths');
		return false;

	} else if ( !haveSameLetters(arrayOfWords) ){ //passed areEqualLengths test.
		console.log('different letters');
		return false;

	} else if ( !haveSameDistribution(arrayOfWords) ){ //passed haveSameLetters test.
		console.log('different letter distribution');
		return false;

	} else {
		console.log('anagrams!');
		return true
	}
}



function areEqualLengths(arrayOfWords){
	var areEqualLengths = true;
	for (var i = 0; i < arrayOfWords.length; i++){
		arrayOfWords.forEach(function(word){
			if (arrayOfWords[i].length !== word.length) {
				areEqualLengths = false;
			}
		});
	}
	return areEqualLengths;
}
	

function haveSameLetters(arrayOfWords){
	var sameLetters = true,
		word1 = arrayOfWords[0];

	arrayOfWords.forEach(function(word){
		for (var i = 0; i < word1.length; i++){
			if ( word1.indexOf( word[i] ) === -1 ) {
				sameLetters = false;
			}
		}
	});

	return sameLetters;
}


function haveSameDistribution(arrayOfWords){
	var histograms = [];

	arrayOfWords.forEach(function(word){
		var wordArray,
			wordHist = {};
		
		wordArray = word.split("").sort(); // "bob" ==> ["b", "o", "b"] ==> ["b", "b", "o"]
		
		for (var i = 0; i < wordArray.length; i++){
			if ( !wordHist[ wordArray[i] ] ){
				wordHist[ wordArray[i] ] = 1;
			} else {
				wordHist[ wordArray[i] ] += 1;
			}
		}

		histograms.push(wordHist);

	});
	
	var wordHistsTheSame = true,
		word1hist = histograms[0];

	for (var i = 0; i < histograms.length; i++){
		for (letter in word1hist){

			if (word1hist[letter] !== histograms[i][letter] ) {
				wordHistsTheSame = false;
			}
		}
	}

	return wordHistsTheSame;

}

