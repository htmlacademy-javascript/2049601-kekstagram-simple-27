import {getThumbnails} from './thumbnails-rendering.js';
import {showAlert} from './util.js';
import './form.js';
import './scale.js';
import './effects.js';


fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
  .then((response) => response.json())
  .then((data) => getThumbnails(data))
  .catch(() => {
    showAlert('Не удалось загрузить фотографии других пользователей');
  });
