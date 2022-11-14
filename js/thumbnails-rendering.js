import {showAlert} from './util.js';

//Находим контейнер для изображений от других пользователей
const picturesList = document.querySelector('.pictures');

//Находим в документе шаблон, который мы будем копировать
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');

/*Функция, добавляющая, заполненное полученными от сервера миниаютюрами фото, хранилище
в контейнер для изображений от других пользователей*/
const getThumbnails = function (data) {
  //Создаем хранилище для создаваемых миниатюр фото других пользователей
  const picturesFragment = document.createDocumentFragment();

  //Проходимся по массиву с объектами, получая данные для вставки в шаблон и складывая их в хранилище
  data.forEach(({url, description, comments, likes}) => {
    const photo = photoTemplate.cloneNode(true);
    photo.querySelector('.picture__img').src = url;
    photo.querySelector('.picture__img').alt = description;
    photo.querySelector('.picture__comments').textContent = comments;
    photo.querySelector('.picture__likes').textContent = likes;

    picturesFragment.append(photo);
  });

  //Добавляем в список заполненное хранилище с созданными по шаблону фото
  picturesList.append(picturesFragment);
};

/*Получаем данные о фото других пользователей от севера и отрисовываем их,
в случае ошибки при получении таких данных,вызываем  соответствующее сообщение*/
fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
  .then((response) => response.json())
  .then((data) => getThumbnails(data))
  .catch(() => {
    showAlert('Не удалось загрузить фотографии других пользователей');
  });

