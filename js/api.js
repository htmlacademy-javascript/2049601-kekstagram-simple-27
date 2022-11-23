import {showAlert} from './util.js';

const LINK_TO_GET_DATA = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const LINK_TO_SEND_DATA = 'https://27.javascript.pages.academy/kekstagram-simple';

const getData = (onSuccess) => {
  fetch(LINK_TO_GET_DATA)
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch(() => {
      showAlert('Не удалось загрузить фотографии других пользователей');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    LINK_TO_SEND_DATA,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => onFail());
};

export {getData, sendData};
