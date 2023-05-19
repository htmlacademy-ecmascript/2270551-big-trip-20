import AppPresenter from './presenter/app-presenter.js';
import FilterPresenter from './presenter/filters-presenter.js';
import EventsPresenter from './presenter/event-presenter.js';
import EventsModel from './model/event-model.js';


const tripMainElement = document.querySelector('.trip-main');
const filtersElement = tripMainElement.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.trip-events');

const eventsModel = new EventsModel();

const eventsPresenter = new EventsPresenter({
  container: siteMainElement ,
  eventsModel
});
const filterPresenter = new FilterPresenter({container: filtersElement});

const appComponent = new AppPresenter({
  tripMainElement,
  filtersElement,
  siteMainElement
});


appComponent.init();
filterPresenter.init();
eventsPresenter.init();

