import { filtersFunctions } from '../utils/filter-utils.js';

function getFilters(events) {
  return Object.entries(filtersFunctions).map(
    ([name, filterFn]) => ({
      name,
      isActive: Boolean(filterFn(events).length),
    })
  );
}

export { getFilters };

/*function getFilters(tasks) {
  return Object.entries(filtersFunctions).map(
    ([filterType, filterTasks]) => ({
      type: filterType,
      disabled: !filterTasks(tasks).length,
    }),
  );
}

export {getFilters};*/
