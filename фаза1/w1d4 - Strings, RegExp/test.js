{
  const re = /ab/;

  //test - есть ли в строке подстрока (рег. выражение)
  console.log(re.test('ab'));
  console.log(re.test('>'));
  console.log(re.test('>ab'));
}

{
  //выражение для одного символа алфавита либо цифры либо _
  // | - или
  const re = /a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|1|2|3|4|5|6|7|8|9|0|_/;

  console.log(re.test('a'));
  console.log(re.test('b'));
  console.log(re.test('0'));
  console.log(re.test('>'));
  console.log(re.test('>a'));
}

{
  // Можем искать одно из слов (больше одного символа)
  const re = /привет|пока/

  console.log(re.test('привет, Артём!'));
  console.log(re.test('пока, Артём!'));
  console.log(re.test('уходи, Артём!'));
}

{
  // диапазон - один символ из перечисленных
  const re = /[a-z0-9]/; // дипозоны, перечисления

  console.log(re.test('a'));
  console.log(re.test('b'));
  console.log(re.test('0'));
  console.log(re.test('>'));
  console.log(re.test('>a'));
}

{
  // диапазон - буква и цифра
  const re = /[a-z][0-9]/; // дипозон в такой очередности - сначала буква, потом цифра

  console.log(re.test('a5'));
  console.log(re.test('b3'));
  console.log(re.test('a'));
  console.log(re.test('0'));
}

{
  //обратный диапозон - символ не должен входить в этот диапозон
  //^ - это не

  const re = /[a-z][^0-9]/; // сначала буква, а потом не цифра
  console.log(re.test('a5'));
  console.log(re.test('b3'));
  console.log(re.test('a%'));
  console.log(re.test('и'));
}

{
  const str = 'abc@mail.com';
  // () - группы
  // любой email в зоне com или ru
  const re = /\w\w\w@\w\w\w\w.(com|ru)/
  console.log(re.test(str));
}

