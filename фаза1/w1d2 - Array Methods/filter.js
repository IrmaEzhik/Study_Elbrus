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

//console.log(cats);

//получаем только клички девочек старше 2х лет
const names = cats
  .filter((cat) => cat.gender === 'female' && cat.age > 2)
  .map((cat) => cat.name);

//console.log(names);
