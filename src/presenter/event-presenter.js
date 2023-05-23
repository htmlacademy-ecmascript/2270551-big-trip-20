/*import EventsListView from '../view/events-list-view.js';
import EventView from '../view/event-view.js';
//import FormPresenter from './board-presenter.js';
import { render } from '../framework/render.js';
//import FormPresenter from './board-presenter.js';

export default class EventsPresenter {
  #container = null;
  eventsListComponent = new EventsListView();


  constructor({ container, eventsModel, offersModel, destinationsModel }) {
    this.container = container;
    this.eventsModel = eventsModel;
    this.offersModel = offersModel;
    this.destinationsModel = destinationsModel;
  }

  init() {
    this.events = [...this.eventsModel.getEvents()];
    this.offers = this.offersModel.getOffers();
    this.destinations = this.destinationsModel.getDestinations();
    /*
    // создание формы для заполнения точки маршрута
    this.formComponent = new FormPresenter({
      container: this.eventsListComponent.getElement(),
      event: this.events[0],
      typeOffers: this.offers.get(this.events[0].type),
      destinations: this.destinations,
    });
    //this.formComponent.init();*/

/*render(this.eventsListComponent, this.formComponent, this.container);

    for (let i = 1; i < this.events.length; i++) {
      const event = this.events[i];
      const typeOffers = this.offers.get(event.type);
      render(
        new EventView({ event: event, typeOffers: typeOffers }),
        this.eventsListComponent.element
      );
    }
  }
}*/

import EventsListView from '../view/events-list-view.js';
import EventView from '../view/event-view.js';
import NoRoutePointView from '../view/no-event-view.js';
import FormPresenter from './board-presenter.js';
import { render, replace } from '../framework/render.js';
import { isKeyEscape } from '../utils.js';
import { NoEventsMessages } from '../consts.js';

export default class EventsPresenter {
  #container = null;

  #eventsListComponent = new EventsListView();

  #eventsModel = null;
  #offersModel = null;
  #destinationsModel = null;

  #events = [];
  #offers = null;
  #destinations = null;

  constructor({ container, eventsModel, offersModel, destinationsModel }) {
    this.#container = container;
    this.#eventsModel = eventsModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;
  }

  init() {
    this.#events = [...this.#eventsModel.events];
    this.#offers = this.#offersModel.offers;
    this.#destinations = this.#destinationsModel.destinations;
    this.#renderEvents();
  }

  #renderEvents() {
    render(this.#eventsListComponent, this.#container);

    if (!this.#events.length) {
      render(
        new NoRoutePointView({ message: NoEventsMessages.ALL }),
        this.#eventsListComponent.element
      );
      return;
    }

    this.#events.forEach((event) => this.#renderEvent(event));
  }

  #renderEvent(event) {
    const typeOffers = this.#offers.get(event.type);

    const eventComponent = new EventView({
      event,
      typeOffers,
      onEditBtnClick: () => {
        switchEventToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const formPresenter = new FormPresenter({
      event,
      typeOffers,
      destinations: this.#destinations,
      container: this.#eventsListComponent.element,
      closeForm: () => {
        switchFormToEvent();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });

    function switchEventToForm() {
      replace(formPresenter.component, eventComponent);
    }

    function switchFormToEvent() {
      replace(eventComponent, formPresenter.component);
    }

    function escKeyDownHandler(evt) {
      if (!isKeyEscape(evt)) {
        return;
      }
      evt.preventDefault();
      switchFormToEvent();
      document.removeEventListener('keydown', escKeyDownHandler);
    }

    render(eventComponent, this.#eventsListComponent.element);
  }
}
