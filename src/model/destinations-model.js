import { createMockDestinations } from '../mocks/destinations.js';

// класс-модель массива мест назначений количеством EVENTS_NUMBER
export default class DestinationsModel {
  #destinations = createMockDestinations();

  get destinations() {
    return this.#destinations;
  }
}
