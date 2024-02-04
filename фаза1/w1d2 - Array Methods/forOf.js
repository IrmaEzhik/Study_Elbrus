const fs = require('fs'); // читаем файл
const { EOL } = require('os');

const data = fs.readFileSync(`${__dirname}/cats.txt`, 'utf-8');

//получить массив строк
const lines = data.split(EOL);

//сделать массив объектов, чтобы с ними было потом проще работать

const cats = [];

for (const line of lines) {
  //разбиваем каждую строку по пробелам, чтобы вытащить каждую часть
  //const chunks = line.split(' '); //это убрали в деструкторизацию

  //расскладываем части из массива по константам
  // const name = chunks[0];
  // const gender = chunks[1];
  // const age = chunks[2];

  const [name, gender, age] = line.split(' '); //*короткая версия записи. Вместо трех разных переменных - делаем деструкторизацию массива - разложить массив по константам. По сути - это синтаксический сахар.

  //создаем объект с котиком
  const cat = {
    name,
    gender,
    age: Number(age)
  };

  //кладем его в новый массив
  cats.push(cat)
}

console.log(cats);


