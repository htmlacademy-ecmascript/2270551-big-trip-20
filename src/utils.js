import dayjs from 'dayjs';

const DATE_FORMAT_TIME = 'HH:mm';
const DATE_FORMAT_MONTS = 'MMM D';
const DATE_FORMAT_MONTS_TIME = 'DD/MM/YY hh:mm';

/*function getRandomNumber(a, b) {

  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}*/

const getRandomNumber = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + min;

const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const humanizePointDateTime = (date) => date ? dayjs(date).format(DATE_FORMAT_TIME) : '';

const humanizePointDateDayMonts = (date) => date ? dayjs(date).format(DATE_FORMAT_MONTS) : '';

const humanizePointDateDayMontsTime = (date) => date ? dayjs(date).format(DATE_FORMAT_MONTS_TIME) : '';

export {getRandomNumber, getRandomArrayElement,humanizePointDateTime,humanizePointDateDayMonts,humanizePointDateDayMontsTime};
