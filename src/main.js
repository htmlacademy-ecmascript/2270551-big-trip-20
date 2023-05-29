import AppPresenter from './presenter/app-presenter.js';
import FilterPresenter from './presenter/filters-presenter.js';
//import getFilters from '../mocks/filters.js';

const tripMainElement = document.querySelector('.trip-main');
const filtersElement = tripMainElement.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.trip-events');

const filterPresenter = new FilterPresenter({container: filtersElement});
//const filter = getFilters(tasksModel.tasks);

const appComponent = new AppPresenter({
  tripMainElement,
  filtersElement,
  siteMainElement
});

appComponent.init();
filterPresenter.init();

