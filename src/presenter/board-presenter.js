import FormView from '../view/form-view.js';
import {render} from '../framework/render.js';

export default class FormPresenter {
  constructor({ container, event, typeOffers, destinations }) {
    this.container = container;
    this.event = event;
    this.typeOffers = typeOffers;
    this.destinations = destinations;
  }
  // создание формы для заполнения точки маршрута
  /*this.formComponent = new FormPresenter({
      container: this.eventsListComponent.getElement(),
      event: this.events[0],
      typeOffers: this.offers.get(this.events[0].type),
      destinations: this.destinations,
    });
    this.formComponent.init();*/

  init() {
    this.formComponent = new FormView({ event: this.event, typeOffers: this.typeOffers, destinations: this.destinations });
    render(this.formComponent, this.container);
  }

}

