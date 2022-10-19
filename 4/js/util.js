//Функция, возвращающая случайное целое число из переданного диапазона включительно - взято на MDN - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  if (min >= 0 && max >= 0 && min < max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return NaN;
}

//Функция для проверки максимальной длины строки
function checkStringLength (string, maxLength) {
  return string.length <= maxLength;
}

//Функция, возвращающая индекс элемента массива данных
function getRandomArrayElement (еlement) {
  return еlement[getRandomIntInclusive(0, еlement.length - 1)];
}

export {getRandomIntInclusive, checkStringLength, getRandomArrayElement};
