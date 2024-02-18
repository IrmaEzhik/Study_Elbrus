// task 1
// console.log(1);
// setTimeout(() => console.log(2), 0);
// Promise.resolve().then(() => console.log(3));
// console.log(4);

// task 2
// console.log(1);
// setTimeout(() => console.log(2), 0);
// console.log(3);
// Promise.resolve()
//   .then(() => console.log(4))
//   .then(() => console.log(5));
// console.log(6);
// 1 3 6 4 5 2
// task 3
// const promise = new Promise((res) => {
//   console.log(1);
//   res(2);
//   console.log(3);
//   setTimeout(() => console.log(4), 0);
// });
// console.log(5);
// promise.then((data) => console.log(data));
// 1 3 5 2 4

// task 4
// async function start() {
//   await console.log(1);
//   //
//   console.log(2);
// }

// async function finish() {
//   console.log(3);
// }

// start().then(() => console.log(4));
// console.log(5);
// finish().then(() => console.log(6));

// 1 2 5 3 4 6
// 1 5 3 2 6 4
// task 5
// setTimeout(() => {
//   console.log(1);
//   Promise.resolve().then(() => console.log(2));
// }, 0);

// new Promise((res) => {
//   console.log(3);
//   setTimeout(() => {
//     console.log(4);
//     res(5);
//   }, 0);
// }).then((data) => {
//   console.log(6);
//   setTimeout(() => console.log(data), 0);
// });

// microTask
// 3 1 2 4 6 5
// 1 2 6 9 8 5 7 4 3
(function () {
  console.log('1'); //

  Promise.resolve(console.log('2')); //

  setTimeout(() => {
    //
    console.log('3');
  }, 2000);

  Promise.resolve().then(() => setTimeout(() => console.log('4')));

  setTimeout(() => {
    //
    console.log('5');
  });

  console.log('6'); //

  setTimeout(() => {
    //
    console.log('7');
  }, 0);

  new Promise((res, rj) => res('8')).then(console.log); //

  console.log('9');
}());
// macro3, macro4
// 1 2 6 9 8 5 7 4 3