console.log("English to Pig Latin Translator");

const phrase = process.argv[2];
const words = phrase.split(" ")
console.log(words);

for (let i = 0; i < words.length; i++) {
    console.log(pigLatin(words[i]));
  }


function pigLatin(word) { 
    return word.substring(1)+word[0]+"ay";
}

