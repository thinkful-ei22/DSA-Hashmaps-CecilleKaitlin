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

const hashString = function(string) {
    let newHash = new HashMap;
    for (let i = 0; i < string.length; i++) {
      newHash.set(string.charAt(i), i);
    }
    if(string.length % 2 === 0 && newHash.length === string.length / 2) {
      return true;
    } else if(string.length % 2 === 1 && newHash.length === (string.length / 2) + 1) {
      return true;
    } else {
      return false;
    }
}

console.log(hashString("acecarr"));
