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
const image = document.querySelector('.img-upload__preview img');
const form = document.querySelector('.img-upload__form');

const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelElemet = document.querySelector('.effect-level__value');

let chosenEffect = DEFAULT_EFFECT;

const onFormChange = function (evt) {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }

  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  if (image.classList.contains(`effects__preview--${chosenEffect}`)) {
    image.classList.remove(`effects__preview--${chosenEffect}`);
  }

  image.classList.add(`effects__preview--${chosenEffect}`);
};

form.addEventListener ('change', onFormChange);

const isDefault = () => chosenEffect === DEFAULT_EFFECT;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
},);

const updateSlider = () => {
  sliderElement.classList.remove('hidden');

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });

  if (isDefault) {
    sliderElement.classList.add('hidden');
  }
};

updateSlider();

sliderElement.noUiSlider.on('update', () => {
  effectLevelElemet.value = sliderElement.noUiSlider.get();
});
