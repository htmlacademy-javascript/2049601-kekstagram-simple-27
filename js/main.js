import './scale.js';
import './upload-image.js';
import './effects.js';
import {formSubmit, onSuccessfulSending, onFailSending} from './form.js';
import {getData} from './api.js';
import {getThumbnails} from './thumbnails-rendering.js';

//Вызов функции,срабатаывющей при отправке формы
formSubmit(onSuccessfulSending, onFailSending);

//Вызов функции для получения фото других пользователей
getData(getThumbnails);
