const fs = require('fs'); // читаем файл
const { EOL } = require('os');

const data = fs.readFileSync(`${__dirname}/cats.txt`, 'utf-8');

//получить массив строк
const lines = data.split(EOL);

//* сделать массив объектов, чтобы с ними было потом проще работать.
//Развернем метод map()
// const callback = (line, index) => {
//   const [name, gender, age] = line.split(' ');
//   return {
//     name,
//     gender,
//     age: Number(age)
//   };
// }
// const cats = lines.map(callback)

const cats = lines.map((line) => {
  const [name, gender, age] = line.split(' ');
  return {
    name,
    gender,
    age: Number(age),
  };
});

//console.log(cats);

//получаем только клички
const names = cats.map((cat) => cat.name);

console.log(names);