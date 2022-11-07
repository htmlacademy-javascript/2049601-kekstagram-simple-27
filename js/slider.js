import {chosenEffect, DEFAULT_EFFECT} from './effects.js';

const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelElemet = document.querySelector('.effect-level__value');

const isDefault = () => chosenEffect === DEFAULT_EFFECT;

noUiSlider.create(sliderElement, {
  range: {
    min: chosenEffect.min,
    max: chosenEffect.max,
  },
  start: chosenEffect.max,
  step: chosenEffect.step,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const updateSlider = () => {
  sliderElement.classList.remove('hidden');

  if (isDefault) {
    sliderElement.classList.add('hidden');
  }
};

sliderElement.noUiSlider.on('update', () => {
  effectLevelElemet.value = sliderElement.noUiSlider.get();
});

export {updateSlider};
