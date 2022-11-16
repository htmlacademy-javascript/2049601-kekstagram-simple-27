import './scale.js';

import {formSubmit, onSuccessfulSending, onFailSending} from './form.js';
import {getData} from './api.js';
import {onFormChange} from './effects.js';
import {getThumbnails} from './thumbnails-rendering.js';

//Вызов функции, аргументом передается функция закрытия оверлея - колбэк
formSubmit(onSuccessfulSending, onFailSending);

//Вызов функции для получения фото других пользователей
getData(getThumbnails);

//Вызов функции для инициализации слайдера и наложения эффектов на загруженное изображение
onFormChange();
