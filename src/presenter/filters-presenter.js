import FiltersView from '../view/filter-view.js';
import {render} from '../framework/render.js';

export default class FiltersPresenter {
  #container = null;

  #filtersComponent = null;

  constructor({ container, filtersFunctions }) {
    this.#container = container;
    this.#filtersComponent = new FiltersView({ filtersFunctions });
  }

  init() {
    render(this.#filtersComponent, this.#container);
  }
}
