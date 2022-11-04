import {getRandomIntInclusive, getRandomArrayElement} from './util.js';

//Создание массива изначальных данных
const PHOTO_DESCRIPTION_COUNT = 25;
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

for (let i = 1; i <= PHOTO_DESCRIPTION_COUNT; i++) {
  identifiers.push(i);
  urls.push(`photos/${i}.jpg`);
}

//Функция, создающая описание фотографии (builder)
const createPhotoDescription = function () {
  return {
    id: getRandomArrayElement(identifiers),
    url: getRandomArrayElement(urls),
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomIntInclusive(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
    comments: getRandomIntInclusive(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT),
  };
};

//Метод генерации массива заданной длины
const getRandomPhotoDescription = function () {
  return Array.from({length: PHOTO_DESCRIPTION_COUNT}, createPhotoDescription);
};

export {getRandomPhotoDescription};
