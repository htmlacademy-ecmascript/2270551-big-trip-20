import WaypointListView from '../view/route-pounts-list';
import {render, RenderPosition} from '../render';
import SortView from '../view/sort-view';
import FormCreateView from '../view/creation-form';
import WaypointView from '../view/route-point';

export default class WaypointsPresenter {
  waypointListComponent = new WaypointListView();

  constructor({waypointsContainer}) {
    this.waypointsContainer = waypointsContainer;
  }

  init() {
    render(new SortView(), this.waypointsContainer, RenderPosition.AFTERBEGIN);
    render(new FormCreateView(), this.waypointsContainer);
    render(this.waypointListComponent, this.waypointsContainer);

    for (let i = 0; i < 3; i++) {
      render(new WaypointView(), this.waypointListComponent.getElement());
    }
  }
}
