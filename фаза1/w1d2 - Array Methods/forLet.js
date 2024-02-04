const fs = require('fs'); // читаем файл
const { EOL } = require('os');

const data = fs.readFileSync(`${__dirname}/cats.txt`, 'utf-8');

//получить массив строк
const lines = data.split(EOL);

//сделать массив объектов, чтобы с ними было потом проще работать

const cats = [];

for (let i = 0; i < lines.length; i += 1) {
  const line = lines[i];
  //разбиваем каждую строку по пробелам, чтобы вытащить каждую часть
  const chunks = line.split(' ')

  //расскладываем части из массива по константам
  const name = chunks[0];
  const gender = chunks[1];
  const age = Number(chunks[2]);

  //создаем объект с котиком
  const cat = {
    name,
    gender,
    age,
  };

  //кладем его в новый массив
  cats.push(cat)
}

console.log(cats);


