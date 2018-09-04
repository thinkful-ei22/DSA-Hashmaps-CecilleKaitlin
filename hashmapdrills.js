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

// Palindrome

function palindrome(string) {
  let newHash = new HashMap();
  let odd = 0;
  for (let i = 0; i < string.length; i++) {
    try {
      let charCount = newHash.get(string[i]);
      charCount ++;
      if (charCount % 2 === 0) {
        odd --;
      } else {
        odd ++;
      }
      newHash.set(string[i], charCount);
    } catch { 
      newHash.set(string[i], 1);
      odd ++;
      }
  } 
  if (string.length % 2 === 0 && odd === 0 || string.length % 2 === 1 && odd === 1) {
    return true;
  }
  else {
    return false;
  }
}

console.log(palindrome("acecarr"));
