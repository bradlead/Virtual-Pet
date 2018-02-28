function Pet() {}
function age() {}
function hunger() {}
function fitness() {}
function feed() {}
module.exports = Pet, age, hunger, fitness, feed;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = SO_FULL_IT_CANT_MOVE;
    this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
}

Pet.prototype.walk = function() {
   if ((this.fitness + 4) <= MAXIMUM_FITNESS ) {
       this.fitness += 4;
   } else {
       this.fitness = MAXIMUM_FITNESS;
   }
}

Pet.prototype.feed = function() {
    if ((this.hunger - 3) >= SO_FULL_IT_CANT_MOVE ) {
        this.hunger -= 3; 
    } else {
        this.hunger = SO_FULL_IT_CANT_MOVE
    }
}

const SO_FULL_IT_CANT_MOVE = 0
const MAXIMUM_FITNESS = 10  
const pet = {
    name: 'Fido',
};

