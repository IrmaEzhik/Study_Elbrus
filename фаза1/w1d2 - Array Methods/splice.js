const fs = require('fs'); // читаем файл
const { EOL } = require('os');

const data = fs.readFileSync(`${__dirname}/cats.txt`, 'utf-8');

//получить массив строк
const lines = data.split(EOL);

const cats = lines.map((line) => {
  const [name, gender, age] = line.split(' ');
  return {
    name,
    gender,
    age: Number(age),
  };
});


//найти первого кто младше 2х лет, удалить его, добавить другого котика
const newCat = {
  name: 'Bonya',
  gender: 'male',
  age: 20,
};

const index = cats.findIndex((cat) => cat.age < 2)

cats.splice(
  index, // индекс начиная с которого нужно удалить элементы
  1, // сколько элементов нужно удалить
  newCat // какие элементы нужно вставить вместо удаленных (необзательно)
);

console.log(cats);
