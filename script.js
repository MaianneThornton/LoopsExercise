// 1
for (i = 1; i <= 7; i++){
  console.log(i);
}

console.log("=====");

// 2
for (i = 5; i <= 25; i++){
  console.log(i);
}

// 3a
const wizards = [
  "Harry Potter",
  "Hermione Granger",
  "Ron Weasley"
];
console.log(wizards);

console.log("=====");

// 3b
for (char of wizards){
console.log(char);
};

console.log("=====");

// 4a
let harryPotterMovies = 0;
console.log(harryPotterMovies);

console.log("=====");

// 4b 
while (harryPotterMovies <= 7){
console.log(harryPotterMovies);
harryPotterMovies++;
};

//4c
console.log(harryPotterMovies);

//BONUS TERRITORY
//5a
const hogwartsHouses = [
  "Gryffindor", 
  "Hufflepuff", 
  "Ravenclaw", 
  "Slytherin"
];
console.log(hogwartsHouses);

//5b
for (char of hogwartsHouses){
  for (houses of char) {
    console.log(houses);
  }
};

// 6a
const quote = [
  "Yer", 
  "A", 
  "Wizard", 
  "Harry"
];
console.log(quote);

//6b
let sentence = "";
while (quote !== sentence){
  console.log(quote.join(" "));
  break;
};
