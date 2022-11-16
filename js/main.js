import './form.js';
import './scale.js';
import './creating-messages.js';

import {formSubmit, closeUploadOverlay} from './form.js';
import {getPhotosOtherUsers} from './api.js';
import {onFormChange} from './effects.js';

//Вызов функции, аргументом передается функция закрытия оверлея - колбэк
formSubmit(closeUploadOverlay);

//Вызов функции для получения фото других пользователей
getPhotosOtherUsers();

//Вызов функции для инициализации слайдера и наложения эффектов на загруженное изображение
onFormChange();
