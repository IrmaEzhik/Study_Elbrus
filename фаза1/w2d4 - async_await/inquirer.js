const inquirer = require('inquirer');

inquirer
  .prompt([
    { type: 'input', name: 'username', message: 'Введи имя:' },
    {
      type: 'list',
      name: 'bonuses',
      message: 'На сколько ты опоздал?',
      choices: [
        { name: 'Не опаздывал', value: 0 },
        { name: 'На 2-3 минутки', value: 1 },
        { name: 'Опоздал больше, чем на 5 минут', value: 0 },
      ],
    },
  ])
  .then((answers) => console.log(answers));