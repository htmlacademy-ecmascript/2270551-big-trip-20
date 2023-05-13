import { getPoint,getOffer,getDestination } from '../mocks/mock-waypoint.js';

const POINT_COUNT = 7;

export default class PointsModel {
  point = Array.from({length: POINT_COUNT},getPoint);
  offer = Array.from({length: POINT_COUNT},getOffer);
  destination = getDestination();

  getPoints(){
    return this.point;
  }

  getOffers(){
    return this.offer;
  }

  getDestinations(){
    return this.destination;
  }
}
