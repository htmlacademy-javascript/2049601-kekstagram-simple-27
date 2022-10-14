// Четвертое домашее задание
//Создание массива изначальных данных
const NUMBER = 25;
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;
const MIN_COMMENTS_COUNT = 0;
const MAX_COMMENTS_COUNT = 200;
const DESCRIPTIONS = [
  'Кекс в лесу',
  'Кекс едет к ветеринару',
  'Кекс обедает',
];
const identifiers = [];
const urls = [];

for (let i = 1; i <= NUMBER; i++) {
  identifiers.push(i);
  urls.push(`photos/${i}.jpg`);
}

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

checkStringLength('50', 140);

//Функция, возвращающая индекс элемента массива данных
function getRandomArrayElement (еlement) {
  return еlement[getRandomIntInclusive(0, еlement.length - 1)];
}

//Функция, создающая описание фотографии (builder)
function createPhotoDescription () {
  return {
    id: getRandomArrayElement(identifiers),
    url: getRandomArrayElement(urls),
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomIntInclusive(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
    comments: getRandomIntInclusive(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT),
  };
}

//Метод генерации массива заданной длины
const randomPhotoDescription = Array.from({length: 25}, createPhotoDescription);

// eslint-disable-next-line no-console
console.log(randomPhotoDescription);
