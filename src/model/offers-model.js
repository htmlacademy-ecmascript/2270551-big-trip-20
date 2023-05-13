import { createMockOffersByTypes } from '../mocks/offers.js';

export default class OffersModel {
  offers = createMockOffersByTypes();

  getOffers() {
    return this.offers;
  }
}
