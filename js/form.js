import {checkStringLength, isEscapeKey} from './util.js';
import {resetScaleInput} from './scale.js';
import {resetEffets} from './effects.js';

const MIN_COMMENTH_LENGTH = 20;
const MAX_COMMENTH_LENGTH = 140;
const form = document.querySelector('.img-upload__form');
const uploadFileInput = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const closeUploadOverlayElement = document.querySelector('#upload-cancel');
const commentField = document.querySelector('.text__description');

//Функция проверяет нажатия Esc и закрывает оверлей загрузки фото
const onUploadOverlayEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadOverlay();
  }
};

//Функция открывает оверлей загрузки фото
const openUploadOverlay = function () {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  resetEffets();
  resetScaleInput();
  document.addEventListener('keydown', onUploadOverlayEscKeydown);
};

//Функция закрывает оверлей загрузки фото
function closeUploadOverlay () {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onUploadOverlayEscKeydown);
  uploadFileInput.value = '';
}

//Добавляет обработчик событий - при загрузке фото, открывается оверлей
uploadFileInput.addEventListener('change', () => {
  openUploadOverlay();
});

//Добавляет обработчик событий  - при нажатии на кнопку закрытия оверлея, оверлей закроется
closeUploadOverlayElement.addEventListener('click', () => {
  closeUploadOverlay();
});

//Валидация формы отправки изображения
//1.Создает экземплятор валидатора и передает в него форму
const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
});

//2. Функция проверки
const validateTextarea = function (value) {
  return checkStringLength(value, MIN_COMMENTH_LENGTH, MAX_COMMENTH_LENGTH);
};

//3. Вызывает метод .addValidator() для описания валидации
pristine.addValidator(
  commentField, //элемент формы, который мы хотим валидировать
  validateTextarea, //функция проверки
  `Длина комментария не может быть меньше ${MIN_COMMENTH_LENGTH} и больше ${MAX_COMMENTH_LENGTH} символов`,//сообщение об ошибке
);

//3. Добавляет обработчик событий с методом .validate()
form.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {evt.preventDefault();}
});
