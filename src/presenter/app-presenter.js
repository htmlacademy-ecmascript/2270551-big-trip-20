import EventsModel from '../model/events-model.js';
import OffersModel from '../model/offers-model.js';
import DestinationsModel from '../model/destinations-model.js';
import TripInfoView from '../view/trip-info-view.js';
import SortingPresenter from './sort-presenter.js';
import ButtonPresenter from './event-button-presenter.js';
import EventsPresenter from './event-presenter.js';
import FormPresenter from './board-presenter.js';
import { render, RenderPosition } from '../framework/render.js';


export default class AppPresenter {

  eventsModel = new EventsModel();
  offersModel = new OffersModel();
  destinationsModel = new DestinationsModel();

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
    this.formComponent = new FormPresenter({
      container:  this.siteMainElement,
    });
    this.eventsComponent = new EventsPresenter({
      container: this.siteMainElement,
      eventsModel: this.eventsModel,
      offersModel: this.offersModel,
      destinationsModel: this.destinationsModel,
    });
    render(new TripInfoView(), this.tripMainElement, RenderPosition.AFTERBEGIN);
    this.sortingComponent.init();
    this.eventsComponent.init();
    this.buttonComponent.init();
  }

}
