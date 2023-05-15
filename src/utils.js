import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
//const DATE_FORMAT_MONTS = 'MMM D';

dayjs.extend(duration);

function getRandomNumber(min = 1, max = 10) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function getRandomArrayElement(items) {
  return items[getRandomNumber(0, items.length - 1)];
}

function transformDate(date, format) {
  return dayjs(date).format(format);
}

function getDuration(timeFrom, timeTo) {

  const timeDuration = dayjs.duration(dayjs(timeTo).diff(timeFrom));

  let days = timeDuration.days();
  days = days ? `${dayjs(days).format('DD[D]')} ` : '';

  let hours = timeDuration.hours();
  hours = hours || days ? `${dayjs(hours).format('HH[H]')} ` : '';

  const minutes = dayjs(timeDuration.minutes()).format('MM[M]');

  return days + hours + minutes;
}

function startStringWithCapital(str) {
  return str[0].toUpperCase() + str.substring(1);
}

/*const DATE_FORMAT_TIME = 'HH:mm';
const DATE_FORMAT_MONTS = 'MMM D';
const DATE_FORMAT_MONTS_TIME = 'DD/MM/YY hh:mm';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + min;

const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];*/

//const humanizePointDateTime = (date) => date ? dayjs(date).format(DATE_FORMAT_TIME) : '';

//const humanizePointDateDayMonts = (date) => date ? dayjs(date).format(DATE_FORMAT_MONTS) : '';

//const humanizePointDateDayMontsTime = (date) => date ? dayjs(date).format(DATE_FORMAT_MONTS_TIME) : '';

//export {   getRandomArrayElement,humanizePointDateTime,humanizePointDateDayMonts,humanizePointDateDayMontsTime};*/

export {
  getRandomNumber,
  getRandomArrayElement,
  transformDate,
  getDuration,
  startStringWithCapital,
};
