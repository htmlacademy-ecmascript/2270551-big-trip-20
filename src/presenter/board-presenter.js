import EventsListView from '../view/events-list-view.js';
import EventView from '../view/event-view.js';
import NoRoutePointView from '../view/no-event-view.js';
import FormView from '../view/form-view.js';
import {render, replace } from '../framework/render.js';
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

  #renderEvent = (event) => {
    const typeOffers = this.#offers.get(event.type);
    const eventComponent = new EventView({
      event,
      typeOffers,
      destinations: this.#destinations,
      onEditBtnClick: () => {
        switchEventToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const formComponent = new FormView({
      event,
      typeOffers,
      destinations: this.#destinations,
      container: this.#eventsListComponent.element,
      onSubmitClick: eventSubmit,
      closeForm: () => {
        switchFormToEvent();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });

    function switchEventToForm () {
      replace(formComponent, eventComponent);
    }

    function switchFormToEvent() {
      replace(eventComponent, formComponent);
    }

    function eventSubmit() {
      switchFormToEvent();
      document.removeEventListener('keydown', escKeyDownHandler);
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
  };
}


