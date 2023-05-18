import EventsListView from '../view/events-list-view.js';
import EventView from '../view/event-view.js';
//import FormPresenter from './board-presenter.js';
import { render } from '../render.js';
//import {render} from '../framework/render.js';
export default class EventsPresenter {
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

    render(this.eventsListComponent, this.container);

    // создание формы для заполнения точки маршрута
    /*this.formComponent = new FormPresenter({
      container: this.eventsListComponent.getElement(),
      event: this.events[0],
      typeOffers: this.offers.get(this.events[0].type),
      destinations: this.destinations,
    });
    this.formComponent.init();*/

    for (let i = 1; i < this.events.length; i++) {
      const event = this.events[i];
      const typeOffers = this.offers.get(event.type);
      render(
        new EventView({ event: event, typeOffers: typeOffers }),
        this.eventsListComponent.getElement()
      );
    }
  }
}
/*import SortingView from '../view/sort-view.js';
import EventListView from '../view/events-list-view.js';
import EventItemView from '../view/event-item-view.js';
import EventEditView from '../view/event-edit-view.js';
import {render, replace} from '../framework/render.js';
import NoEventView from '../view/no-event-view.js';

export default class EventListPresenter {
  #eventListView = new EventListView();
  #container = null;
  #eventsModel = null;

  #events = null;
  #types = null;
  #destinations = null;
  #availableOffers = null;

  constructor({container, eventsModel}) {
    this.#container = container;
    this.#eventsModel = eventsModel;
  }

  init() {
    this.#events = [...this.#eventsModel.events];
    this.#types = [...this.#eventsModel.types];
    this.#destinations = [...this.#eventsModel.destinations];
    this.#availableOffers = this.#eventsModel.offers;

    if (!this.#events.length) {
      render(new NoEventView(), this.#container);
      return;
    }
    render(new SortingView(), this.#container);
    render(this.#eventListView, this.#container);

    for (let i = 0; i < this.#events.length; i++) {
      this.#renderEvent(this.#events[i]);
    }
  }

  #renderEvent(event) {
    const itemEdit = new EventEditView({
      event,
      types: this.#types,
      destinations: this.#destinations,
      availableOffers: this.#availableOffers,
      onSubmitClick: itemSubmitClickHandler,
      onCloseClick: itemCloseClickHandler
    });

    const itemView = new EventItemView({
      event,
      types: this.#types,
      destinations: this.#destinations,
      availableOffers: this.#availableOffers,
      onEditClick: itemEditClickHandler
    });

    const replaceItemViewToEdit = () => {
      replace(itemEdit, itemView);
    };

    const replaceItemEditToView = () => {
      replace(itemView, itemEdit);
    };

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceItemEditToView();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    function itemEditClickHandler() {
      replaceItemViewToEdit();
      document.addEventListener('keydown', escKeyDownHandler);
    }

    function itemSubmitClickHandler() {
      replaceItemEditToView();
      document.addEventListener('keydown', escKeyDownHandler);
    }

    function itemCloseClickHandler() {
      replaceItemEditToView();
      document.addEventListener('keydown', escKeyDownHandler);
    }

    render(itemView, this.#eventListView.element);
  }
}*/
