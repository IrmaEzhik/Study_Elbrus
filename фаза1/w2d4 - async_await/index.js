const fs = require('fs/promises');

// function processFile() {
//   fs.readFile('./data/input.txt', 'utf-8').then((data) => fs.writeFile('./data/output.txt', data, 'utf-8'))
//     .then(console.log('Запись завершена')).catch(console.log);
// }

// processFile();
const URL = 'https://rickandmortyapi.com/api/character';
// function getCharacter() {
//   fetch(URL).then((response) => response.json()).then((data) => { console.log(data); });
// }

// getCharacter();

// async function getCharacter() {
//   try {
//     const response = await fetch(URL);
//     const data = await response.json();
//     return data;
//   } catch (err) {
//     return err;
//   }
// }

// getCharacter().then(console.log);

// async function getDataOne() {
//   console.log(1);
//   const data = await fs.readFile('./data/input.txt', 'utf-8');
//   console.log(4);
//   return data;
// }

// async function getDataTwo() {
//   console.log(2);
//   const data = await fs.readFile('./data/output.txt', 'utf-8');
//   return data;
// }
// console.log(3);
// getDataOne().then(console.log);
// getDataTwo().then(console.log);