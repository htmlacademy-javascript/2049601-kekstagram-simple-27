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

const isDefault = function () {
  return chosenEffect === DEFAULT_EFFECT;
};

noUiSlider.create(sliderElement, {
  range: {
    min: chosenEffect.min,
    max: chosenEffect.max,
  },
  start: chosenEffect.max,
  step: chosenEffect.step,
  connect: 'lower',
},);

const updateSlider = function () {
  sliderElement.classList.remove('hidden');

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });

  if (isDefault()) {
    sliderElement.classList.add('hidden');
    image.style.filter = '';
    image.className = '';
  }
};

const resetEffets = function () {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

const onFormChange = function (evt) {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }

  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  image.className = '';
  image.classList.add(`effects__preview--${chosenEffect.name}`);
  updateSlider();
};

form.addEventListener ('change', onFormChange);

sliderElement.noUiSlider.on('update', () => {
  effectLevelElemet.value = sliderElement.noUiSlider.get();
  image.style.filter = `${chosenEffect.filter}(${effectLevelElemet.value}${chosenEffect.unit})`;
});

export {resetEffets};
