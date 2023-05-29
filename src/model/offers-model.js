import { createMockOffersByTypes } from '../mocks/offers.js';
export default class OffersModel {
  #offers = createMockOffersByTypes();

  get offers() {
    return this.#offers;
  }
}
