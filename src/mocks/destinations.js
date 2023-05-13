import { getRandomNumber, getRandomArrayElement } from '../utils.js';

const DESTINATIONS_TITLES = [
  'Antalya',
  'Amsterdam',
  'Krasnodar',
  'Rostov-on-Done',
  'New York',
  'Moscow'
];

const mockDescriptions = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
  'Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
  'Aliquam erat volutpat.',
  'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
];

const PICTURES_NUMBER = 4;

const mockPictures = [
  {
    src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 30)}`,
    description: 'Lorem ipsum dolor sit amet',
  },
  {
    src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 30)}`,
    description: 'Cras aliquet varius magna',
  },
  {
    src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 30)}`,
    description: 'Nullam nunc ex',
  },
  {
    src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 30)}`,
    description: 'Aliquam erat',
  },
  {
    src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 30)}`,
    description: 'Nunc fermentum tortor',
  },
];

function createMockDestination() {
  return {
    description: getRandomArrayElement(mockDescriptions),
    pictures: Array.from(
      { length: PICTURES_NUMBER },
      () => getRandomArrayElement(mockPictures)
    ),
  };
}

function createMockDestinations() {
  const destinations = new Map();
  DESTINATIONS_TITLES.forEach((title) => destinations.set(title, createMockDestination()));
  return destinations;
}

export { createMockDestinations, DESTINATIONS_TITLES };
