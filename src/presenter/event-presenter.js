import EventsListView from '../view/events-list-view.js';
import EventView from '../view/event-view.js';
import { render } from '../framework/render.js';
//import FormPresenter from './board-presenter.js';

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
    /*
    // создание формы для заполнения точки маршрута
    this.formComponent = new FormPresenter({
      container: this.eventsListComponent.getElement(),
      event: this.events[0],
      typeOffers: this.offers.get(this.events[0].type),
      destinations: this.destinations,
    });
    //this.formComponent.init();*/

    render(this.eventsListComponent, /*this.formComponent,*/ this.container);

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
