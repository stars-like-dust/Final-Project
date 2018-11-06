// Build your array like this.

var disneyCharacters = [
  {
      character: "Mickey Mouse",
      nouns: ["Attack", "attention", "attorney", "audience", "author", "back"],
      verbs: ["Bag", "ball","bank", "Bar", "base"],
      adverbs: ["Be", "beat", "beautiful"],
      proper_nouns: ["Behavior", "bed", "begin", "stud"]
    },
    {
      character: "Aladdin's Genie",
      nouns: ["word", "tool", "computer"],
      verbs: ["Laugh", "stupid", "person"],
      adverbs: ["say", "boot", "laugh"],
      proper_nouns: ["Moon", "stars", "sky"]
    }
];

//  When you select a name on the pull down list, i.e., "Mickey Mouse".
var select = "Mickey Mouse";
// Create an empty list
//  This always gets cleared for each new selection

//  Get the keys and values from the character you want.

function getWords(name) {
  var results = [];
  for (var i=0; i < disneyCharacters.length; i++) {
    for(key in disneyCharacters[i]) {
      if(disneyCharacters[i][key].indexOf(name)!=-1) {
        //  Add the keys and values to the results list
        results.push(disneyCharacters[i]);
      }
    }
  }
}
//  Call the function by passing in the selection from the pull down.
getWords(select);

// You can use d3.select an id in your text where you want to fill in the sentence with
//  the following variables.

// Get a random noun, verb, adverb, and proper noun from the results array.
var noun = results[0].nouns[Math.floor(Math.random() * results[0].nouns.length)];
var verb = results[0].verbs[Math.floor(Math.random() * results[0].verbs.length)];
var adverb = results[0].adverbs[Math.floor(Math.random() * results[0].adverbs.length)];
var proper_noun = results[0].proper_nouns[Math.floor(Math.random() * results[0].proper_nouns.length)];

