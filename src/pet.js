const STARVING = 5
const GAINING_WEIGHT = 3
const SO_FULL_IT_CANT_MOVE = 0
const MAXIMUM_FITNESS = 10  

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = SO_FULL_IT_CANT_MOVE;
    this.fitness = MAXIMUM_FITNESS;

}

Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
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
Pet.prototype.checkUp = function() { 

    if (this.isAlive === false) return 'Your pet is no longer alive :('

    if ((this.fitness <= GAINING_WEIGHT) && (this.hunger <= STARVING)) return 'I am hungry AND I need a walk';

    if (this.fitness <= GAINING_WEIGHT) return 'I need a walk!'

    if (this.hunger >= STARVING) return 'I am hungry'

    return 'I feel great!'

    
}

module.exports = Pet

