import FiltersView from '../view/filter-view.js';
import {render} from '../framework/render.js';

/*export default class FiltersPresenter {
  filtersComponent = new FiltersView();

  constructor({ container }) {
    this.container = container;
  }

  init() {
    render(this.filtersComponent, this.container);
  }
}*/

export default class FiltersPresenter {
  #container = null;

  constructor({container}) {
    this.#container = container;
  }

  init() {
    render(new FiltersView(), this.#container);
  }
}
