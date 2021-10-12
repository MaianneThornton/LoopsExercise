// 1
for (i = 1; i <= 7; i++){
  console.log(i);
};

// OR
// for (i = 1; i < 8; i++){
//   console.log(i);

console.log("=====");

// 2
for (i = 5; i <= 25; i += 4){
  console.log(i);
};

// 3a
const wizards = [
  "Harry Potter",
  "Hermione Granger",
  "Ron Weasley"
];
console.log(wizards);

console.log("=====");

// 3b
for (names of wizards){
console.log(names);
};

console.log("=====");

// 4a
let harryPotterMovies = 0;
console.log(harryPotterMovies);

console.log("=====");

// 4b 
while (harryPotterMovies < 8){
  harryPotterMovies++;
};

// OR
// while (harryPotterMovies <= 7){
// harryPotterMovies++;
// }
// OR
// while(true){
//   harryPotterMovies++;
//   if (harryPotterMovies === 8){
//     break;
//   }

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
for (houses of hogwartsHouses){
  for (names of houses) {
    console.log(names);
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

/*
OR
// USING A FOR OF LOOP
let sentence = "";
for (word of quote){
  // console.log(word);
  sentence += `${word} `;
  console.log(sentence);
}
sentence = sentence.trim();
console.log(sentence);
  
// USING A FOR LOOP
let sentence = "";
for (i = 0; i < quote.length; i++){
  console.log (quote[i]);
  sentence += `${quote[i]} `;
  console.log(sentence);
}
console.log(sentence.trim());

*/

