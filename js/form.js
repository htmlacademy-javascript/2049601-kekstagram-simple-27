import {isEscapeKey} from './util.js';

const uploadFileInput = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const closeUploadOverlayElement = document.querySelector('#upload-cancel');


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

//Обработчки событий - при загрузке фото, открывается оверлей
uploadFileInput.addEventListener('change', () => {
  openUploadOverlay();
});

//Обработчки событий - при нажатии на кнопку закрытия оверлея, оверлей закроется
closeUploadOverlayElement.addEventListener('click', () => {
  closeUploadOverlay();
});
