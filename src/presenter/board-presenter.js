import FormView from '../view/form-view.js';
import {render} from '../framework/render.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export default class FormPresenter {
  #routePointListContainer = null;
  #formComponent = null;
  #editFormComponent = null;
  #mode = Mode.DEFAULT;
  #handleModeChange = null;
  #handleDataChange = null;
  #routePoint = null;
  #destination = null;
  #typeOffers = null;

  constructor({ routePointListContainer, container, event, typeOffers, destinations }) {
    this.routePointListContainer = routePointListContainer;
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
    const prevFormComponent = this.#formComponent;
    const prevEditFormComponent = this.#editFormComponent;

    this.formComponent = new FormView({
      container: this.eventsListComponent.getElement(),
      event: this.events[0],
      typeOffers: this.offers.get(this.events[0].type),
      destinations: this.destinations,
      onClick: this.#handleClick,
      onFavoriteClick: this.#handleFavoriteClick
    });

    this.#editFormComponent = new EditFormView ({
      destinations: this.destinations,
      event: this.events[0],
      typeOffers: this.offers.get(this.events[0].type),
      onFormSubmit: this.#handleFormSubmit});

    if (prevFormComponent === null || prevEditFormComponent === null) {
      render(this.#formComponent, this.#routePointListContainer);
      return;
    }

    if (this.#routePointListContainer.contains(prevFormComponent.element)) {
      replace(this.#formComponent, prevFormComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#editFormComponent, prevEditFormComponent);
    }

    remove(prevFormComponent);
    remove(prevEditFormComponent);
  }

  destroy() {
    remove(this.#formComponent);
    remove(this.#editFormComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#replaceFormToRoutePoint();
    }
  }

  #replaceRoutePointToForm() {
    replace(this.#editFormComponent, this.#formComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  }

  #replaceFormToRoutePoint() {
    replace(this.#formComponent, this.#editFormComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = Mode.DEFAULT;
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToRoutePoint();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #handleClick = () => {
    this.#replaceRoutePointToForm();
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange({...this.#routePoint, isFavorite: !this.#routePoint.isFavorite}, this.#destination, this.#typeOffers);
  };

  #handleFormSubmit = (routePoint, destination, typeOffers) =>{
    this.#handleDataChange(routePoint, destination, typeOffers);
    this.#replaceFormToRoutePoint();
  };

  //event: this.event, typeOffers: this.typeOffers, destinations: this.destinations });
  //render(this.formComponent, this.container);
  //}

}

