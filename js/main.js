//Функция, возвращающая случайное целое число из переданного диапазона включительно - взято на MDN - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  if (min >= 0 && max >= 0 && min < max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return NaN;
}

getRandomIntInclusive(5, 8);

//Функция для проверки максимальной длины строки
// первый вариант - полное написание
/*function meterStringlength (string, length) {
  if (length >= 20 && length <= 140) {
    return true;
  }

  return false;
}*/
//второй вариант пробую тернарный оператор. Какое написание можно использовать?
function meterStringlength (string, length) {
  return !!((length >= 20 && length <= 140)); //До автоисправления eslint было так - return (length >= 20 && length <= 140) ? true : false;
}

meterStringlength (2, 100);
