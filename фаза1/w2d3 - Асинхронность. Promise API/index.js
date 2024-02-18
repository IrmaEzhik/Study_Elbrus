// setTimeout(() => { console.log('1'); });
// console.log('5');
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.random() > 0.5) {
//       resolve('3');
//     } else {
//       reject('Error');
//     }
//   });
// });
// setTimeout(() => { console.log('2'); });
// console.log(promise
//   .then(console.log)
//   .catch(console.log));

const fs = require('fs/promises');
//const fs = require('fs').promises;

// fs.readFile(`${__dirname}/data/input.txt`, 'utf-8')
//   .then((data) => {
//     const arr = data.split('\n');
//     const newArr = arr.map((el) => [el.split(' ')[0], Number(el.split(' ')[1] * 60)]);
//     const string = newArr.map((el) => el.join(' '));
//     return fs.writeFile(`${__dirname}/data/output.txt`, string.join('\n'), 'utf-8');
//   })
//   .then(() => {
//     console.log('Запись в файл выполнена успешно.');
//   })
//   .catch((error) => {
//     console.log('Произошла ошибка:', error);
//   });

function proccessFiles() {
  const arrProm = [];
  fs.readdir(`${__dirname}/data`).then((data) => {
    const newData = ['data-1.txt', 'data-2.txt', 'data-3.txt'];
    newData.forEach((fileName) => {
      console.log(`${__dirname}/data/${fileName}`);
      arrProm.push(fs.readFile(`${__dirname}/data/${fileName}`, 'utf-8'));
    });
    Promise.all(arrProm).then((data) => console.log(data)).catch(console.log);
  });
}


proccessFiles();