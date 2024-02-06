// class Test {
//   #p;

//   constructor(type) {
//     this.type = type;
//     this.a = 4;
//     this.b = 3;
//     this.c = 5;
//     this.#p = (this.a + this.b + this.c) / 2;
//   }

//   #calculateArea() {
//     return Math.sqrt((this.#p - this.a) * (this.#p - this.b) * (this.#p - this.c) * this.#p);
//   }

//   getArea() {
//     console.log(this.#calculateArea());
//   }
// }

// const test = new Test();

// const p1 = new Test('Треугольник');
// p1.getArea();
// console.log(p1.p);

// class Phone {
//   #phoneNumber;

//   constructor(number) {
//     this.#phoneNumber = number;
//   }

//   get phoneNumber() {
//     const transformPhoneNumber = `+${this.#phoneNumber}`;
//     return transformPhoneNumber;
//   }

//   set phoneNumber(value) {
//     if (value !== '') {
//       this.#phoneNumber = value;
//     }
//   }
// }

// const p = new Phone('79999999999');
// console.log(p.phoneNumber);

// p.phoneNumber = '';
// console.log(p.phoneNumber);