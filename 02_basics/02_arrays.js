const MCU_heroes = ["thor","ironman","spiderman"]
const DC_heroes = ["superman","flash","batman"]

// MCU_heroes.push(DC_heroes);
// console.log(MCU_heroes);
// console.log(MCU_heroes[3][1]);

// const allHeroes = MCU_heroes.concat(DC_heroes);
// console.log(allHeroes);

// const all_new_heros = [...MCU_heroes,...DC_heroes]
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const usable_another_array = another_array.flat(Infinity)
console.log(usable_another_array);


console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"))
console.log(Array.from({name : "Hitesh"})) //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score2));
