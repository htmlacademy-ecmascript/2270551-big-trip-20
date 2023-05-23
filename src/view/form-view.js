import AbstractView from '../framework/view/abstract-view.js';
import { WAYPOINT_TYPES, EMPTY_EVENT, DateFormats } from '../consts.js';
import { getRandomArrayElement, startStringWithCapital, transformDate } from '../utils.js';
import {OFFERS_TITLES, OFFERS_PRICES } from '../mocks/offers.js';

function createTypesListItemTemplate(title) {
  return `<div class="event__type-item">
            <input id="event-type-${title}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${title}">
            <label class="event__type-label  event__type-label--${title}" for="event-type-${title}-1">
              ${startStringWithCapital(title)}
            </label>

          </div>`;
}

// район оферов в форме новой точки, описанте точки назначения в форме новой точки
function createDestinationInfoTemplate(destination) {
  const { description, pictures } = destination;

  const picturesTemplate = pictures ? createPicturesListTemplate(pictures) : '';

  return `<section class="event__section  event__section--destination">
            <h3 class="event__section-title  event__section-title--destination">Destination</h3>
            <p class="event__destination-description">${description}</p>
            ${picturesTemplate}
          </section>`;
}

// отображение картинок в форме новой точки- места назначения
function createPicturesListTemplate(pictures) {
  const listItemsTemplate = pictures
    .map(
      ({ src, description }) =>
        `<img class="event__photo" src="${src}" alt="${description}">`
    )
    .join('');

  return `<div class="event__photos-container">
            <div class="event__photos-tape">
              ${listItemsTemplate}
            </div>
          </div>`;
}

// отрисовка кнопок офферсов (дополнительных предложений) в форме новой точки
function createOffersTemplate(offersList, isSelected) {
  const selectedAttribute = isSelected ? 'checked' : '';
  return offersList.map(() =>
    `<div class="event__offer-selector">
       <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1}" type="checkbox" name="event-offer-luggage-1" ${selectedAttribute}>
       <label class="event__offer-label" for="event-offer-luggage-1">
         <span class="event__offer-title">${getRandomArrayElement(OFFERS_TITLES)}</span>
         &plus;&euro;&nbsp;
         <span class="event__offer-price">${getRandomArrayElement(OFFERS_PRICES)}</span>
       </label>
     </div>`).join('');

}

// отображение фильтров
function createDataListItemTemplate(title) {
  return `<option value='${title}'></option>`;
}

function createFormTemplate({ event = EMPTY_EVENT, typeOffers = [], destinations }) {
  const { type, destination, dateFrom, dateTo, basePrice, offers } = event;

  const dataListTemplate = Array.from(destinations.keys())
    .map((title) => createDataListItemTemplate(title))
    .join('');

  const typesListTemplate = WAYPOINT_TYPES.map((title) =>
    createTypesListItemTemplate(title)
  ).join('');

  const offersTemplate = typeOffers.length
    ? createOffersTemplate({ allOffers: typeOffers, selectedOffersIds: offers })
    : '';

  const destinationInfo = destinations.get(destination);
  const destinationInfoTemplate = destinationInfo
    ? createDestinationInfoTemplate(destinationInfo)
    : '';

  return `
          <li class="trip-events__item">
            <form class="event event--edit" action="#" method="post">
              <header class="event__header">
                <div class="event__type-wrapper">
                  <label class="event__type  event__type-btn" for="event-type-toggle-1">
                    <span class="visually-hidden">Choose event type</span>
                    <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
                  </label>
                  <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
                  <div class="event__type-list">
                    <fieldset class="event__type-group">
                      <legend class="visually-hidden">Event type</legend>
                      ${typesListTemplate}
                    </fieldset>
                  </div>
                </div>
                <div class="event__field-group  event__field-group--destination">
                  <label class="event__label  event__type-output" for="event-destination-1">
                  ${startStringWithCapital(type)}
                  </label>
                  <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination}" list="destination-list-1">
                  <datalist id="destination-list-1">${dataListTemplate}</datalist>
                </div>

                <div class="event__field-group  event__field-group--time">
                  <label class="visually-hidden" for="event-start-time-1">From</label>
                  <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time"
                    value="${transformDate(dateFrom, DateFormats.FOR_FORM)}">
                  &mdash;
                  <label class="visually-hidden" for="event-end-time-1">To</label>
                  <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time"
                    value="${transformDate(dateTo, DateFormats.FOR_FORM)}">
                </div>

                <div class="event__field-group  event__field-group--price">
                  <label class="event__label" for="event-price-1">
                    <span class="visually-hidden">Price</span>
                    &euro;
                  </label>
                  <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
                </div>

                <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                <button class="event__reset-btn" type="reset">Delete</button>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </header>
              <section class="event__details">
                <section class="event__section  event__section--offers">
                 <h3 class="event__section-title  event__section-title--offers">Offers</h3>
                   <div class="event__available-offers">

                   ${offers ? createOffersTemplate(offers) : ''}
                   ${offersTemplate}
                   </div>
                </section>
                ${destinationInfoTemplate}
              </section>
            </form>
          </li>`;
}
//${offersTemplate}
//${offers ? createOffersTemplate(offers) : ''}

export default class FormView extends AbstractView {
  #event = null;
  #typeOffers = null;
  #destinations = null;
  #handleSubmit = null;

  constructor({ event, typeOffers, destinations, onFormSubmit}) {
    super();
    this.#event = event;
    this.#typeOffers = typeOffers;
    this.#destinations = destinations;
    this.#handleSubmit = onFormSubmit;
    this.element.querySelector('form').addEventListener('submit', this.#submitHandler);
  }

  get template() {
    return createFormTemplate(this.#event, this.#typeOffers, this.#destinations);
  }

  #submitHandler = (evt) => {
    evt.preventDefault();
    this.#handleSubmit(this.#event, this.#destinations, this.#typeOffers);
  };

}

/*export default class FormView {
  constructor({ event, typeOffers, destinations }) {
    this.event = event;
    this.typeOffers = typeOffers;
    this.destinations = destinations;
  }

  getTemplate() {
    return createFormTemplate({
      event: this.event,
      typeOffers: this.typeOffers,
      destinations: this.destinations,
    });
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
}*/
