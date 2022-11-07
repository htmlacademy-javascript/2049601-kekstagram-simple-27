const image = document.querySelector('.img-upload__preview img');
const form = document.querySelector('.img-upload__form');

const EFFECTS = [
  {
    name: 'none',
    filter: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: ''
  },
  {
    name: 'chrome',
    filter: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'sepia',
    filter: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'marvin',
    filter: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  {
    name: 'phobos',
    filter: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  },
  {
    name: 'heat',
    filter: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  },
];

const DEFAULT_EFFECT = EFFECTS[0];
let chosenEffect = DEFAULT_EFFECT;

const onFormChange = function (evt) {
  if (!evt.target.classList.contains('.effects__radio')) {
    return;
  }

  chosenEffect = EFFECTS.some((effect) => effect.name === evt.target.value);
  image.classList.add(`effects__preview--${chosenEffect}`);
};

form.addEventListener ('change', onFormChange);

export {chosenEffect, DEFAULT_EFFECT};
