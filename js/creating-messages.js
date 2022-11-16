// const successButton = document.querySelector('.success__button');
// const successMessageElement = document.querySelector('.success');
const successMessageTempalte = document.querySelector('#success').content.querySelector('.success');
const errorMessageTempalte = document.querySelector('#error').content.querySelector('.error');

const getSuccessMessage = function () {
  const successMessage = successMessageTempalte.cloneNode(true);
  document.body.append(successMessage);
};


// const closeSuccessMessage = function () {
//   successMessageElement.remove();
// };

// successButton.addEventListener('click', () => {
//   closeSuccessMessage();
// });


const getErrorMessage = function () {
  const errorMessage = errorMessageTempalte.cloneNode(true);
  document.body.append(errorMessage);
};

export {getSuccessMessage, getErrorMessage};
