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

//получаем суммарный возраст всех мальчиков
const sum = cats.filter((cat) => cat.gender === 'male')
.reduce((acc, cat) => acc + cat.age, 0); //0 - это начальное знаечние аккумулятора

console.log(sum);
