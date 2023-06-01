import EventsListView from '../view/events-list-view.js';
import EventView from '../view/event-view.js';
import SortingView from '../view/sort-view.js';
import NoRoutePointView from '../view/no-event-view.js';
import FormView from '../view/form-view.js';
import {render, replace } from '../framework/render.js';
import { isKeyEscape } from '../utils.js';
import { NoEventsMessages, SortingNames } from '../consts.js';
//import SortingPresenter from './sort-presenter.js';
import { sortByTime, sortByPrice, sortMap } from '../utils.js';

export default class EventsPresenter {
  #container = null;
  #sortingComponent = null;

  #eventsListComponent = new EventsListView();

  #eventsModel = null;
  #offersModel = null;
  #destinationsModel = null;

  #events = [];
  #offers = null;
  #destinations = null;
  #sourcedEvents = null;
  #eventPresenters = new Map();

  #currentSorting = SortingNames.DAY;

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
    this.#sourcedEvents = new Map(this.#events);
    this.#renderSorting();
    this.#renderEvents();

  }

  #clearEventsList() {
    this.#eventPresenters.forEach((presenter) => presenter.destroy());
    this.#eventPresenters.clear();
  }

  #renderSorting() {
    this.#sortingComponent = new SortingView({
      onSortingClick: this.#handleSortingClick,
    });
    render(this.#sortingComponent, this.#eventsListComponent.element);
  }

  #renderEvents() {
    render(this.#eventsListComponent, this.#container);
    // добавляем логику отображения заглушки
    if (!this.#events.length) {
      render(
        new NoRoutePointView({ message: NoEventsMessages.ALL }),
        this.#eventsListComponent.element
      );
      return;
    }

    this.#events.forEach((event) => this.#renderEvent(event));
  }


  #sortEvents(sortType) {
    this.#currentSorting = sortType;
    switch (sortType) {
      case SortingNames.TIME:
        this.#events = sortMap(this.#sourcedEvents, sortByTime);
        break;
      case SortingNames.PRICE:
        this.#events = sortMap(this.#sourcedEvents, sortByPrice);
        break;
      default:
        this.#events = new Map(this.#sourcedEvents);
    }
  }

  #handleSortingClick = (sortType) => {
    if (sortType === this.#currentSorting) {
      return;
    }
    this.#sortEvents(sortType);
    this.#clearEventsList();
    this.#renderEvents();
  };


  /*#handleSortingClick = (sortType) => {
    if (sortType === this.#currentSorting) {
      return;
    }
    this.#sortEvents(sortType);
    this.#clearEventsList();
    this.#renderEvents();
  };*/

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


