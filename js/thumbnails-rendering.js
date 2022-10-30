import {getRandomPhotoDescription} from './data.js';

function getThumbnails () {
//Находим контейнер для изображений от других пользователей
  const picturesList = document.querySelector('.pictures');

  //Находим в документе шаблон, который мы будем копировать
  const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');

  //Создаем массив с объектами - описаниями фотографий
  const photosDescription = getRandomPhotoDescription();

  //Создаем хранилище для создаваемых миниатюр фото других пользователей
  const picturesFragment = document.createDocumentFragment();

  //Проходимся по массиву с объектами, получая данные для вставки в шаблон и складывая их в хранилище
  photosDescription.forEach(({url, description, comments, likes}) => {
    const photo = photoTemplate.cloneNode(true);
    photo.querySelector('.picture__img').src = url;
    photo.querySelector('.picture__img').alt = description;
    photo.querySelector('.picture__comments').textContent = comments;
    photo.querySelector('.picture__likes').textContent = likes;

    picturesFragment.append(photo);
  });

  //Добавляем в список заполненное хранилище с созданными по шаблону фото
  picturesList.append(picturesFragment);
}

export {getThumbnails};
