const DEFAULT_SCALE = 100;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const STEP_SCALE = 25;

const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');

const scaleImage = function (value = DEFAULT_SCALE) {
  scaleInput.value = `${value}%`;
  image.style.transform = `scale(${value / DEFAULT_SCALE})`;
};

const onSmallerButtonClick = function () {
  const value = parseInt(scaleInput.value, 10);
  let newValue = value - STEP_SCALE;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }

  scaleImage(newValue);
};

const onBiggeButtonClick = function () {
  const value = parseInt(scaleInput.value, 10);
  let newValue = value + STEP_SCALE;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }

  scaleImage(newValue);
};

const resetScaleInput = function () {
  scaleImage();
};

smallerButton.addEventListener('click', onSmallerButtonClick);
biggerButton.addEventListener('click', onBiggeButtonClick);

export {resetScaleInput};
