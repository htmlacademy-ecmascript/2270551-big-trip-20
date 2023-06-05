//функция генерации фильтров
import { filtersFunctions } from '../utils/filter-utils.js';

function getFilters(events) {
  return Object.entries(filtersFunctions).map(
    ([name, FilterFn]) => ({
      name,
      isActive: Boolean(FilterFn(events).length),
    })
  );
}

export { getFilters };
