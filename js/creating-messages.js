//Создание сообщения об успешной загрузке изображения по шаблону из разметки
const successMessageTempalte = document.querySelector('#success').content.querySelector('.success');

const getSuccessMessage = function () {
  const successMessage = successMessageTempalte.cloneNode(true);
  document.body.append(successMessage);
};

//Создание сообщения с ошибкой загрузки изображения по шаблону из разметки
const errorMessageTempalte = document.querySelector('#error').content.querySelector('.error');

const getErrorMessage = function () {
  const errorMessage = errorMessageTempalte.cloneNode(true);
  document.body.append(errorMessage);
};


export {getSuccessMessage, getErrorMessage};
