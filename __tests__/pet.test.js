const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);

    });
});

describe('constructor', () => {
    it('sets the name property', () => {
      const pet = new Pet('Fido');
      expect(pet.name).toEqual('Fido');
    });
});

describe('constructor', () => {
    it('the tamagotchi has an intial age of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
    });
});

describe('constructor', () => {
    it('Makes the Tamagotchi one year closer to kicking the bucket', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
    });
});

describe('constructor', () => {
    it('Makes the Tamagotchi hungrier', () => {
        const pet = new Pet('Fido');
        expect(pet.hunger).toEqual(0)
    });
});