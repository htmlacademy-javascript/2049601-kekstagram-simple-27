import {checkStringLength, isEscapeKey} from './util.js';

const form = document.querySelector('.img-upload__form');
const uploadFileInput = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const closeUploadOverlayElement = document.querySelector('#upload-cancel');
const commentField = document.querySelector('.text__description');
const minCommentLength = 40;
const maxCommentLength = 140;

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

  document.addEventListener('keydown', onUploadOverlayEscKeydown);
};

//Функция закрывает оверлей загрузки фото
const closeUploadOverlay = function () {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onUploadOverlayEscKeydown);
  uploadFileInput.value = '';
};

//Функция добавляет обработчик событий - при загрузке фото, открывается оверлей
const addOpenOverlay = function () {
  uploadFileInput.addEventListener('change', () => {
    openUploadOverlay();
  });
};

//Функция добавляет обработчик событий  - при нажатии на кнопку закрытия оверлея, оверлей закроется
const addCloseOverlay = function () {
  closeUploadOverlayElement.addEventListener('click', () => {
    closeUploadOverlay();
  });
};

//Валидация формы отправки изображения
//1.Создает экземплятор валидатора и передает в него элемент формы
const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextClass: 'img-upload__text',
});

//2. Вызывает метод .addValidator() для описания валидации
pristine.addValidator(
  commentField, //элемент формы, который мы хотим валидировать
  checkStringLength(commentField, minCommentLength, maxCommentLength), //функция проверки
  `Длина комментария не может быть меньше ${minCommentLength} и больше ${maxCommentLength} символов`,//сообщение об ошибке
);

//3. Добавляет обработчик событий с методом .validate()
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});


export {addOpenOverlay, addCloseOverlay};
