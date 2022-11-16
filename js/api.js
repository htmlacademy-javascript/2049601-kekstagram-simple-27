import {getThumbnails} from './thumbnails-rendering.js';
import {showAlert} from './util.js';

/*Получаем данные о фото других пользователей от севера и отрисовываем их,
в случае ошибки при получении таких данных, вызываем  соответствующее сообщение*/
const getPhotosOtherUsers = function () {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((data) => getThumbnails(data))
    .catch(() => {
      showAlert('Не удалось загрузить фотографии других пользователей');
    });
};

export {getPhotosOtherUsers};
