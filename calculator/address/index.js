console.log("Address Book");

const DATA_POKEMONS = [
  {
    name: "Bulbasaur",
    species: "Seed Pokemon",
    type: "Grass",
    height: "0,7 m",
    weight: "6,9 kg"
  },
  {
    name: "Charmander",
    species: "Lizard Pokemon",
    type: "Fire",
    height: "0,6 m",
    weight: "8,5 kg"
  },
  {
    name: "Squirtle",
    species: "Tiny Turtle Pokemon",
    type: "Water",
    height: "0,5 m",
    weight: "9,0 kg"
  },
  {
    name: "Chikorita",
    species: "Leaf Pokemon",
    type: "Grass",
    height: "0,69 m",
    weight: "6,4 kg"
  },
  {
    name: "Cyndaquil",
    species: "Fire Mouse Pokemon",
    type: "Fire",
    height: "0,5 m",
    weight: "7,9 kg"
  },
  {
    name: "Totodile",
    species: "Big Jaw Pokemon",
    type: "Water",
    height: "0,6 m",
    weight: "9,5 kg"
  }
];

const pokemon = {
  getPokemon: data => data,
  getName: data => {
    return data.map(item => {
      return item.name;
    });
  },
  getSpecies: data => {
    return data.map(item => {
      return item.species;
    });
  },
  displayConsole: data => {
    data.forEach(item => {
      console.log(item);
    });
  }
};

console.log(pokemon.getPokemon(DATA_POKEMONS));

console.log(pokemon.getSpecies(DATA_POKEMONS));

pokemon.displayConsole(DATA_POKEMONS);