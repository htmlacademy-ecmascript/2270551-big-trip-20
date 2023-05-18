//import AbstractView from '../framework/view/abstract-view.js';
//import { createElement } from '../render.js';
import { createElement } from '../framework/render.js';


// подготовка листа событий (набора строк)
const createEventsListTemplate = () => '<ul class="trip-events__list"></ul>';

export default class EventsListView {
  getTemplate() {
    return createEventsListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}


/*const createEventsListTemlpate = () => '<ul class="trip-events__list">';

export default class EventsListView extends AbstractView {
  #element = null;
  get template() {
    return createEventsListTemlpate();
  }
}*/
