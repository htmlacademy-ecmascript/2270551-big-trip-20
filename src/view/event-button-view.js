// создание ДОМ кнопки New_Event
import AbstractView from '../framework/view/abstract-view.js';

const createButtonView = () =>
  ` <div class="trip-main">
     <button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>
    </div>
  `;

export default class ButtonView extends AbstractView {
  get template() {
    return createButtonView();
  }
}
