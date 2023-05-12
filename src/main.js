import {render, RenderPosition} from './render.js';
import FilterView from './view/filter-view.js';
import InfoView from './view/trip-info.js';
import ButtonView from './view/new-task-button-view.js';
import BoarderPresenter from './presenter/trip-presenter.js';
import PointsModel from './model/model-waypoint.js';


const tripFilters = document.querySelector('.trip-controls__filters');
const tripMain = document.querySelector('.trip-main');
const tripEvents = document.querySelector('.trip-events');
const pointsModel = new PointsModel;
const boarderPresenter = new BoarderPresenter({container:tripEvents,pointsModel});

render(new InfoView(), tripMain, RenderPosition.AFTERBEGIN);
render(new FilterView(), tripFilters);
render(new ButtonView(), tripMain);
boarderPresenter.init();

