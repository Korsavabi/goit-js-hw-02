'use strict';

const findLongestWord = function(string) {
    let arrayWord = string.split(' ');
    let longArrayWord = arrayWord[0];
    let wordLenght = arrayWord[0].length;
    for(let i = 1; i < arrayWord.length; i++){

       if(wordLenght < arrayWord[i].length){
        wordLenght = arrayWord[i].length;
        longArrayWord = arrayWord[i];
        
       }
      
    }
    return longArrayWord;
  };

  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

  console.log(findLongestWord('Google do a roll')); // 'Google'
  
  console.log(findLongestWord('May the force be with you')); // 'force'
