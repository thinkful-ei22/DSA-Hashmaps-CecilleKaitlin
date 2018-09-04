const HashMap = require('./hashmap');

const lor = new HashMap();

const main = function() {
  lor.set("Hobbit", "Bilbo");
  lor.set("Hobbit", "Frodo");
  lor.set("Wizard", "Gandolf");
  lor.set("Human", "Aragon");
  lor.set("Elf", "Legolas");
  lor.set("Maiar", "The Necromancer");
  lor.set("Maiar", "Sauron");
  lor.set("Ringbearer", "Gollum");
  lor.set("LadyOfLight", "Galadriel");
  lor.set("HalfElven", "Arwen");
  lor.set("Ent", "Treebeard");

  // console.log(lor.get("Maiar"));

  console.log(lor);
}

// main();

//-----------------------------Palindrome--------------------------------

// function palindrome(string) {
//   let newHash = new HashMap();
//   let odd = 0;
//   for (let i = 0; i < string.length; i++) {
//     try {
//       let charCount = newHash.get(string[i]);
//       charCount ++;
//       if (charCount % 2 === 0) {
//         odd --;
//       } else {
//         odd ++;
//       }
//       newHash.set(string[i], charCount);
//     } catch {
//       newHash.set(string[i], 1);
//       odd ++;
//       }
//   }
//   if (string.length % 2 === 0 && odd === 0 || string.length % 2 === 1 && odd === 1) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }

// console.log(palindrome("acecarr"));

//--------------------------Anagrams---------------------------------------

// Write an algorithm to group a list of words into anagrams. For example,
// if the input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats',
//'race'], the output should be: [['east', 'teas', 'eats'], ['cars',
//'arcs'], ['acre', 'race']].


//Few Pointers
//Input Type is Array
//Output Type is Array of Arrays

//Comparison - Dealing with length - if you set a string to another
//string and the length doesn't increase - it would be an anagrams

//Other ways of comparison -



// const anagram = function(array) {
//   // setting a new array
//   const newArray1 = [];
//   // grabbing the first word as a string
//   const firstValue = array[0];
//   // pushing that first word into a new array
//   newArray1.push(firstValue);
//   // removing that word from the array
//   array.shift();

//   // making a new hash
//   const firstHash = new HashMap();

//   // populating the hash with the first word
//   firstHash.set(firstValue); 
  // for(let i = 0; i < firstValue.length; i++) {
  //   firstHash.set(firstValue[i], i);
  // }
//   // [ {e, 0}, {a, 1}, {s, 2}, {t, 3} ]
//   // saving the length of the hash
//   let currentLength = Object.keys(firstHash).length; // 3 -> technically 4, including the 0 index

//   // for each word, run against the hash of 'east'. if the length is equal, add the word to array and remove from old array.
//   for (let i = 0; i < array.length; i++) {
//     let secondValue = array[i];
//     console.log('this is the second value', secondValue);
//     firstHash.set(secondValue[i], i); // should equal 3 or more than 3

//     // if the length is 3 (equal to east hash length), the word is an anagram.
//     if (Object.keys(firstHash).length === currentLength) {
//       newArray1.push(secondValue);
//       array.splice(i, 1);
//     }
//   }
//   console.log(newArray1);
//   console.log(array);
// }

function anagram(array) {
  let anagrams = new Map();

  array.forEach(word => {
    // sort each word
    let sorted = word.split('').sort().join(''); // gives us an array of [e, a, s, t] -> [a, e, s, t] -> 'aest'
    let anagram = anagrams.get(sorted) || []; // if there is nothing set, give it an empty array to push into (add w/ spread operator)
    anagrams.set(sorted, [...anagram, word]);
  });
  console.log(Array.from(anagrams.values()));
}

anagram(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']);