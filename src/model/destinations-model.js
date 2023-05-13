import { createMockDestinations } from '../mocks/destinations.js';

export default class DestinationsModel {
  destinations = createMockDestinations();

  getDestinations() {
    return this.destinations;
  }
}
