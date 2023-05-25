import AbstractView from '../framework/view/abstract-view.js';

const createEventsListTemlpate = () => '<ul class="trip-events__list">';

export default class EventsListView extends AbstractView {
  #element = null;
  get template() {
    return createEventsListTemlpate();
  }

  removeElement() {
    this.element = null;
  }
}
