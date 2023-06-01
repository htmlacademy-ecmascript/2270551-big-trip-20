import EventsModel from '../model/events-model.js';
import OffersModel from '../model/offers-model.js';
import DestinationsModel from '../model/destinations-model.js';
import TripInfoView from '../view/trip-info-view.js';
//import SortingPresenter from './sort-presenter.js';
//import ButtonPresenter from './event-button-presenter.js';
//import EventsPresenter from './board-presenter.js';
import { render, RenderPosition } from '../framework/render.js';
import { getFilters } from '../mocks/filters.js';
import FiltersView from '../view/filter-view.js';
//import FiltersPresenter from './filters-presenter.js';


export default class AppPresenter {
  #tripMainElement = null;
  #filtersElement = null;
  #siteMainElement = null;

  #filtersComponent = null;
  //#eventsComponent = null;

  #eventsModel = new EventsModel();
  #offersModel = new OffersModel();
  #destinationsModel = new DestinationsModel();

  #filters = getFilters(this.#eventsModel.events);

  constructor({ tripMainElement, filtersElement, siteMainElement }) {
    this.#tripMainElement = tripMainElement;
    this.#filtersElement = filtersElement;
    this.#siteMainElement = siteMainElement;
  }

  init() {
    this.#renderTripInfo();
    //this.#renderFilters();
    //this.#renderEventsList();

  }

  #renderTripInfo() {
    render(
      new TripInfoView(),
      this.#tripMainElement,
      RenderPosition.AFTERBEGIN
    );
  }

  #renderFilters() {
    this.#filtersComponent = new FiltersView({
      container: this.#filtersElement,
      filters: this.#filters,
    });
    this.#filtersComponent.init();
  }

  /*#renderEventsList() {
    this.#eventsComponent = new EventsPresenter({
      container: this.#siteMainElement,
      eventsModel: this.#eventsModel,
      offersModel: this.#offersModel,
      destinationsModel: this.#destinationsModel,
    });
    this.#eventsComponent.init();
  }*/
}


/*export default class AppPresenter {

  eventsModel = new EventsModel();
  offersModel = new OffersModel();
  destinationsModel = new DestinationsModel();
  //filters = getFilters(this.eventsModel.events);

  constructor({ tripMainElement, filtersElement, siteMainElement }) {
    this.tripMainElement = tripMainElement;
    this.filtersElement = filtersElement;
    this.siteMainElement = siteMainElement;
  }

  init() {
    this.sortingComponent = new SortingPresenter({
      container: this.siteMainElement,
    });
    this.buttonComponent = new ButtonPresenter ({
      container:  this.tripMainElement, // отрисовка кнопки New_Event
    });
    this.eventsComponent = new EventsPresenter({
      container: this.siteMainElement,
      eventsModel: this.eventsModel,
      offersModel: this.offersModel,
      destinationsModel: this.destinationsModel,
    });
    this.filtersComponent = new FiltersPresenter ({
      container:  this.filtersElement,
    //filters: this.filters, // отрисовка кнопок фильтров
    });

    render(new TripInfoView(), this.tripMainElement, RenderPosition.AFTERBEGIN);
    this.sortingComponent.init();
    this.eventsComponent.init();
    this.buttonComponent.init();
    this.filtersComponent.init();
    //render(new FiltersView({filters}), this.siteMainElement);

  }

}*/
