// вспомогательная функция для фильтрации
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import {FiltersNames} from '../consts.js';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

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
