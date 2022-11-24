const ALERT_SHOW_TIME = 10000;

//Функция для проверки длины строки
const checkStringLength = (value, minLength, maxLength) => value.length >= minLength && value.length <= maxLength;

//Проверка нажатия клавиши Esc
const isEscapeKey = (evt) => evt.key === 'Escape';

//Сообщение об ошибке
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.color = '#ff4e4e';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.bottom = '200px';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.lineHeight = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#232321;';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {checkStringLength, isEscapeKey, showAlert};
