const { Shape } = require('./Shape');
// Класс Circle является подклассом класса Shape и представляет круг.

// Импорт класса Shape из файла './Shape'.
const { Shape } = require('./Shape');

class Circle extends Shape {
  // Конструктор класса Circle, который принимает имя и радиус (с умолчанием 20).
  constructor(name, radius = 20) {
    // Вызов конструктора родительского класса Shape с передачей имени.
    super(name);
    // Установка свойства радиуса для объекта Circle.
    this.radius = radius;
  }

  // Метод calculateArea для вычисления площади круга.
  calculateArea() {
    // Вызов метода calculateArea родительского класса Shape.
    super.calculateArea();
    // Вывод в консоль площади круга, используя формулу π * r^2.
    console.log(Math.PI * this.radius ** 2);
  }
}

// Экспорт класса Circle для использования в других модулях.
module.exports = { Circle };