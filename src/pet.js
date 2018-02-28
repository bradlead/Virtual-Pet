function Pet() {}
module.exports = Pet;

function Pet(name) {
    this.name = 'Fido';
    this.age = 0;
}

Pet.prototype.growUp = function() {
    this.age += 1;
};
const pet = {
    name: 'Fido',
};