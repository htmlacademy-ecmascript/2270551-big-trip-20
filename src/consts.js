const WAYPOINT_TYPES = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant',
];

const FILTERS_NAMES = ['everything', 'future', 'present', 'past'];


// перечисление фильтров
const FiltersNames = {
  ALL : 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

const SORTING_NAMES = ['day', 'event', 'time', 'price', 'offers'];

const SortingNames = {
  DAY: 'default',
  TIME: 'time',
  PRICE: 'price',
};

const DateFormats = {
  FOR_FORM: 'DD/MM/YY h:mm',
  FULL: 'YYYY-MM-DDTHH:mm',
  DAY_MACHINE: 'YYYY-MM-DD',
  DAY_HUMAN: 'D MMMM',
  TIME: 'h:mm',
  FLATPICKR: 'd/m/y H:i',
};

const DurationFormats = {
  DAYS: 'DD[D] HH[H] mm[M]',
  HOURS: 'HH[H] mm[M]',
  MINUTES: 'mm[M]',
};

const NoEventsMessages = {
  ALL: 'Click New Event to create your first point',
  FUTURE: 'There are no future events now',
  PRESENT: 'There are no present events now',
  PAST: 'There are no past events now',
};

const EventAddButtonStatus = {
  DISABLED: 'disabled',
  ENABLED: ''
};

const EMPTY_EVENT = {
  type: WAYPOINT_TYPES[0],
  destination: '',
  basePrice: 0,
  dateFrom: new Date(),
  dateTo: new Date(),
  offers: [],
  isFavorite: false,
};

export { WAYPOINT_TYPES, FiltersNames, FILTERS_NAMES, EventAddButtonStatus, SortingNames, SORTING_NAMES, NoEventsMessages, DurationFormats, DateFormats, EMPTY_EVENT };
