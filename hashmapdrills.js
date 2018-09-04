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

//Palindrome plan of attack

//input: "wow"
//output: true

//input: "north""
//output: false

//Creating the algorithm
//1. Iterate through the string.
//2. Get the number of pairs - (str.length - 1) / 2 --needs mod - do something here in hashmap to bring to number 4
//3. Write an expression that groups matching characters into pairs.
//4. Write an expression that finds a single character with no match if it exists.
//5. When 3 equals 2 AND 4 is TRUE - return TRUE.
















const hashString = function(string) {
    //Set the default pairCount to 0.
    let pairCount = 0;

    let newHash = new HashMap;
    for (let i = 0; i < string.length; i++) {
      newHash.set(i, string[i]);
    }
    // console.log(JSON.stringify(newHash, null, 2));

    for (let i = 0; i < string.length; i++) {
      let checkLetter = newHash.get(i);
      // console.log(checkLetter);
      // for (let j = 1; j < string.length; j++) {
      //   let newLetter = newHash.get(j);
      //   if (newLetter === checkLetter) {
      //     pairCount++;
      //   }
      }

    // length = 7
    // 4 letters, 3 null = 3 duplicates, 1 unique

    //Get the number of pairs in the string.
    const pairTotal = (string.length - 1) / 2;

    //Iterate through the string
    for (let i = 0; i < string.length; i++) {

      //Write an expression that groups matching characters into pairs.


    }
    return;
}

hashString("racecar");
