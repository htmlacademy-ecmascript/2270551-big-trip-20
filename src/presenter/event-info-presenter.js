import TripInfoView from '../view/event-info-view.js';
import {RenderPosition, render} from '../framework/render.js';

export default class EventInfoPresenter {
  #container = null;

  constructor({container}) {
    this.#container = container;
  }

  init() {
    render(new TripInfoView(), this.#container, RenderPosition.AFTERBEGIN);
  }
}
