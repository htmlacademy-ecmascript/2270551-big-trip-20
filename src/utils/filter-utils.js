import dayjs from 'dayjs';
import FiltersNames from '../consts.js';

const filtersFunctions = {
  [FiltersNames.ALL]: (event) => event,
  [FiltersNames.FUTURE]: (event) =>
    event.filter(({ dateFrom }) => dayjs(dateFrom).isAfter(dayjs(), 'day')),
  [FiltersNames.PRESENT]: (event) =>
    event.filter(
      ({ dateFrom, dateTo }) =>
        dayjs(dateFrom).isSameOrBefore(dayjs(), 'day') &&
        dayjs(dateTo).isSameOrAfter(dayjs(), 'day')
    ),
  [FiltersNames.PAST]: (event) =>
    event.filter(({ dateTo }) => dayjs(dateTo).isBefore(dayjs(), 'day')),
};
export {filtersFunctions};
