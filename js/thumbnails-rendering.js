//Находим контейнер для изображений от других пользователей
const picturesListElement = document.querySelector('.pictures');


//Находим в документе шаблон, который мы будем копировать
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');

/*Функция, добавляющая, заполненное полученными от сервера миниаютюрами фото, хранилище
в контейнер для изображений от других пользователей*/
const getThumbnails = function (data) {
  //Создаем хранилище для создаваемых миниатюр фото других пользователей
  const picturesFragment = document.createDocumentFragment();

  //Проходимся по массиву с объектами, получая данные для вставки в шаблон и складывая их в хранилище
  data.forEach(({url, description, comments, likes}) => {
    const photoElement = photoTemplate.cloneNode(true);
    const pictureElement = photoElement.querySelector('.picture__img');

    pictureElement.src = url;
    pictureElement.alt = description;
    photoElement.querySelector('.picture__comments').textContent = comments;
    photoElement.querySelector('.picture__likes').textContent = likes;

    picturesFragment.append(photoElement);
  });

  //Добавляем в список заполненное хранилище с созданными по шаблону фото
  picturesListElement.append(picturesFragment);
};

export {getThumbnails};
