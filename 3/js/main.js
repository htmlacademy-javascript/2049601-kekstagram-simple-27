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
function checkStringLength (string, maxLength) {
  return string.length <= maxLength;
}

checkStringLength('50', 140);

// Четвертое домашее задание
//Создание массива изначальных данных
const id = [];
const url = [];

for (let i = 1; i <= 25; i++) {
  id[i] = i;
  url[i] = `photos/${ i }.jpg`;
}

const descriptions = [
  'Кекс в лесу',
  'Кекс едет к ветеринару',
  'Кекс обедает',
];

const like = getRandomIntInclusive(15, 200);
const comment = getRandomIntInclusive(0, 200);

//Функция, возвращающая индекс элемента массива данных
function getRandomArrayElement (еlement) {
  return еlement[getRandomIntInclusive(0, еlement.length - 1)];
}

//Функция, создающая описание фотографии (builder)
function createPhotoDescription () {
  return {
    id: getRandomArrayElement(id),
    url: getRandomArrayElement(url),
    description: getRandomArrayElement(descriptions),
    likes: like,
    comments: comment,
  };
}

//Метод генерации массива заданной длины
const randomPhotoDescription = Array.from({length: 25}, createPhotoDescription);

randomPhotoDescription();
