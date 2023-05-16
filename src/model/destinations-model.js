import { createMockDestinations } from '../mocks/destinations.js';

// класс-модель массива мест назначений количеством EVENTS_NUMBER
export default class DestinationsModel {
  destinations = createMockDestinations();

  getDestinations() {
    return this.destinations;
  }
}
