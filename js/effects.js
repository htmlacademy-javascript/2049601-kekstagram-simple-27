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

const slider = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level__value');

let chosenEffect = DEFAULT_EFFECT;

function isDefault() {
  return chosenEffect === DEFAULT_EFFECT;
}

noUiSlider.create(slider, {
  range: {
    min: chosenEffect.min,
    max: chosenEffect.max,
  },
  start: chosenEffect.max,
  step: chosenEffect.step,
  connect: 'lower',
},);

const updateSlider = () => {
  slider.classList.remove('hidden');

  slider.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });

  if (isDefault()) {
    slider.classList.add('hidden');
    image.style.filter = '';
    image.className = '';
  }
};

const resetEffets = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }

  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  image.className = '';
  image.classList.add(`effects__preview--${chosenEffect.name}`);
  updateSlider();
};

form.addEventListener ('change', onFormChange);

slider.noUiSlider.on('update', () => {
  effectLevel.value = slider.noUiSlider.get();
  image.style.filter = `${chosenEffect.filter}(${effectLevel.value}${chosenEffect.unit})`;
});

export {resetEffets};
