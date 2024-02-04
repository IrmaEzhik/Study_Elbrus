const fs = require('fs'); // читаем файл
const { EOL } = require('os');

const data = fs.readFileSync(`${__dirname}/cats.txt`, 'utf-8');

//получить массив строк
const lines = data.split(EOL);

//массив объектов
const cats = lines.map((line) => {
  const [name, gender, age] = line.split(' ');
  return {
    name,
    gender,
    age: Number(age),
  };
});

//получаем суммарный возраст котиков
// let acc = 0;
// for (const cat of cats) {
//   acc += cat.age
// }

const sum = cats.reduce((acc, cat) => acc + cat.age, 0); //0 - это начальное знаечние аккумулятора

//console.log(sum);

//найдем возраст самого взрослого котика
const maxAge = cats.reduce((acc, cat) => cat.age > acc ? cat.age : acc, 0);

console.log(maxAge);
