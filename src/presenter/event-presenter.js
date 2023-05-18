import EventsListView from '../view/events-list-view.js';
import EventView from '../view/event-view.js';
import { render } from '../framework/render.js';

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

    for (let i = 1; i < this.events.length; i++) {
      const event = this.events[i];
      const typeOffers = this.offers.get(event.type);
      render(
        new EventView({ event: event, typeOffers: typeOffers }),
        this.eventsListComponent.element
      );
    }
  }
}

