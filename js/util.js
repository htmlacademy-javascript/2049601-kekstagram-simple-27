//Функция, возвращающая случайное целое число из переданного диапазона включительно - взято на MDN - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomIntInclusive = function (min, max) {
  if (min >= 0 && max >= 0 && min < max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return NaN;
};

//Функция для проверки максимальной длины строки
// const checkStringLength = function (string, minLength, maxLength) {
//   return string.length >= minLength && string.length <= maxLength;
// };

//Функция для проверки длины строки
const checkStringLength = function (value, minLength, maxLength) {
  return value.length >= minLength && value.length <= maxLength;
};

//Функция, возвращающая индекс элемента массива данных
const getRandomArrayElement = function (еlement) {
  return еlement[getRandomIntInclusive(0, еlement.length - 1)];
};

//Проверка нажатия клавиши Esc
const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomIntInclusive, checkStringLength, getRandomArrayElement, isEscapeKey};
