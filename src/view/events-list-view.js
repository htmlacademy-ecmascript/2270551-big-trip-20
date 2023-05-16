import { createElement } from '../render.js';

// подготовка листа событий (набора строк)
function createEventsListTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

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
