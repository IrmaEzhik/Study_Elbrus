// *--- Объявление и работа с объектами ---

// Объявление объекта с различными типами ключей и значениями
const objFirst = {
  name: 'Alex',
  age: 20,
  1: [1, 2, 3, 4]
};

// Создание объекта через конструктор
const objSecond = { name: 'Viktor' };

// Изменение значения свойства 'name' в objFirst
objFirst.name = 'Julia';

// Вывод в консоль значений из objFirst и objSecond
// console.log(objFirst);
// console.log(objSecond);

const key = 'name';

// Вывод значений по ключу и переменной
// console.log(objFirst.name);
// console.log(objFirst[key]);

// Итерация по ключам объекта с помощью цикла for...in
for (const key in objFirst) {
  //console.log(key);
}

// Фильтрация ключей, проверка на массив и вывод значений
const keyArr = Object.keys(objFirst);
for (const key of keyArr) {
  if (Array.isArray(objFirst[key])) {
    //console.log(objFirst[key]);
  }
}

//console.log(keyArr);

// Добавление и удаление свойств в объекте
objFirst.isPrivate = true;
delete objFirst.name;
//console.log(objFirst);

// Проверка наличия ключей в объекте
// console.log(('name' in objFirst));
// console.log(objFirst.hasOwnProperty('lolo'));

// Создание объекта с использованием сокращенного синтаксиса
const name = 'Alex';
const student = { name };

//console.log(student);

// Объект cat с ключами name и voice
const cat = { name: 'Барсик', voice: 'Мяу' };

// Функция выводит информацию о звуке животного
function animalSay(animal) {
  console.log(`${animal.name} сказал: "${animal.voice}"`);
}

// Вызов функции с передачей объекта cat
// animalSay(cat);

// Копирование объекта с использованием спред-оператора
const obj1 = { name: 'Viktor' };
const obj3 = { ...obj1 };

// * --- Примеры работы с объектами и контекстом ---

// Импорт классов и создание экземпляра класса Circle
// const circle = new Circle('Классный круг');

// Вывод информации о круге и счетчиках класса Shape
// circle.calculateArea();
// console.log(Circle.count);

// Создание объекта newObj с динамическим ключом из другого объекта
// const obj = { name: 'alex', age: 20 };
// const newObj = { [obj.name]: obj.age };
// console.log(newObj);
