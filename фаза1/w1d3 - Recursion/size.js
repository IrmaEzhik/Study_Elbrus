//* посчитать размер файлов на диске
//допустим у нас много папок, в кажой папке могут быт файлы и всё это имеет какой-то вес (размер диска) (в конспекте картинки к это этой задаче)


// массив - папка, число - файл
const disk = [
  [
    [5],
    8,
    9,
  ],
  [
    [10, 12],
    4,
    5
  ],
  10,
  2,
  9,
];

function size(x) {
  return Array.isArray(x) ? x.reduce((acc, el) => acc + size(el, 0)) : x;
  // if (Array.isArray(x)) {
  //   let sum = 0;
  //   for (const el of x) {
  //     sum += size(el);
  //   }
  //   return sum;
  // }
  //   return x;
}

console.log(size(disk));