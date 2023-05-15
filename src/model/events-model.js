// модель событий
import { getRandomEvent } from '../mocks/event.js';

// количество предложений (оферов)
const EVENTS_NUMBER = 7;

// класс-модель массива предложений (оферов) количеством EVENTS_NUMBER
export default class EventsModel {
  events = Array.from({ length: EVENTS_NUMBER }, getRandomEvent);

  getEvents() {
    return this.events;
  }

}

