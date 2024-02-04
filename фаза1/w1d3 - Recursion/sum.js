// реализуем формулу из конспекта
function sum(n) {
  if (n > 0) return sum(n - 1) + n;  // рекурсивный случай
  else return 0; // базовый случай, без базового случай рекурсия не завершит свою работу бесконечность и будет переполнен call-stack
}

// const sum = (n) => n > 0 ? sum(n - 1) + n : 0; // короткий вариант записи

//console.log(sum(5));


//* факториал

function fact(n) {
  if (n > 0) return fact(n - 1) * n;
  else return 1;
}

//console.log(fact(5));