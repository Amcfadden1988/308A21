//Part 1
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
  companion: {
            name: "Leo",
            type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea" ,      
            inventory: ["small hat", "sunglasses"]
        }
    }
};

//Loop to log each item in Robin's Inventory // part 4

for (const item of adventurer.inventory) {
    console.log(item);
}

//part 2: Class Fantasy
class Character {
    static MAX_HEALTH = 100;
    constructor(name){
        this.name=name;
        this.health= Character.MAX_HEALTH;
        this.invnetory=[];
    }
}

            roll (mod = 0); {
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`)
            }
            

        
              const robin = new Character("Robin");
              robin.inventory = ["sword", "potion", "artifact"];
              robin.companion = new Character("Leo");
              robin.companion.type = "Cat";
              robin.companion.companion = new Character("Frank");
              robin.companion.companion.type = "Flea";
              robin.companion.companion.inventory = ["small hat", "sunglasses"];
              

              console.log(robin);
//Test roll
robin.roll();
robin.companion.roll();
robin.companion.companion.roll();


//part 3
              class Adventurer extends Character {
                static roles = [Healer, Mage];
                constructor (name, role) {
                  super(name);
                  if (!Adventurer.roles.includes (role)) {

                  }

                  // Adventurers have specialized roles.
                  this.role = (name);
                  // Every adventurer starts with a bed and 50 gold coins.
                  this.inventory.push("bedroll", "50 gold coins");
                }
                // Adventurers have the ability to scout ahead of them.
                gather () {
                  console.log(`${this.name} is gathering gems...`);
                  super.roll();
                }
              }
              //create adventurer

              const adventurerRobin = new Adventurer("Robin", "Leo");
              adventurerRobin.scout();
              // Log each item in Robin's inventory
              
              for (const item of adventurerRobin.inventroy) {
                console.log(item);
              }

             