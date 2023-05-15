import AppPresenter from './presenter/app-presenter.js';


const tripMainElement = document.querySelector('.trip-main');
const filtersElement = tripMainElement.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.trip-events');

const appComponent = new AppPresenter({
  tripMainElement,
  filtersElement,
  siteMainElement
});

appComponent.init();


