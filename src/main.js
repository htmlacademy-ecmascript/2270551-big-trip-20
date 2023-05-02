import {render, RenderPosition} from './render';
import FilterView from './view/filter-view';
import InfoView from './view/trip-info';
import ButtonView from './view/new-task-button-view';
import WaypointsPresenter from './presenter/trip-presenter';
import PointsModel from './model/model-waypoint.js';


const tripFilters = document.querySelector('.trip-controls__filters');
const tripMain = document.querySelector('.trip-main');
const tripEvents = document.querySelector('.trip-events');
const pointsModel = new PointsModel;
const boardPresenter = new WaypointsPresenter({waypointsContainer: tripEvents, pointsModel});

render(new InfoView(), tripMain, RenderPosition.AFTERBEGIN);
render(new FilterView(), tripFilters);
render(new ButtonView(), tripMain);
boardPresenter.init();
