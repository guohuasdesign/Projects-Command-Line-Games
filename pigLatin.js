console.log("English to Pig Latin Translator");
const phrase = process.argv[2];
const words = phrase.split(" ")
const vowels = ['a', 'e', 'i', 'o', 'u'];


function pigLatin(word) { 
   
    //If a word starts with two consonants move the two consonants to the end of the word and add “ay.”
    if (!vowels.includes(word[0].toLowerCase()) && !vowels.includes(word[1].toLowerCase())) {
        return word.substring(2)+word.substring(0,2)+"ay";
    } else

    //3.If a word starts with a vowel add the word “way” at the end of the word
    if (vowels.includes(word[0].toLowerCase())) {
      return word +"way";
    } else {
        //1. If a word starts with a consonant and a vowel, put the first letter of the word at the end of the word and add “ay.”
     return word.substring(1)+word[0]+"ay";

    }
   

}

for (let i = 0; i < words.length; i++) {
  console.log(pigLatin(words[i]));
}