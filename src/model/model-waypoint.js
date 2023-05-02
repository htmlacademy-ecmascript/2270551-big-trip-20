import {createPoints} from '../mocks/mock-waypoint.js';
export default class PointsModel {
  points = createPoints();

  getPoints() {
    return this.points;
  }
}
