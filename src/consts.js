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

const SORTING_NAMES = ['day', 'event', 'time', 'price', 'offers'];

const DateFormats = {
  FOR_FORM: 'DD/MM/YY h:mm',
  FULL: 'YYYY-MM-DDTHH:mm',
  DAY_MACHINE: 'YYYY-MM-DD',
  DAY_HUMAN: 'D MMMM',
  TIME: 'h:mm',
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

export { WAYPOINT_TYPES, FILTERS_NAMES, SORTING_NAMES, DateFormats, EMPTY_EVENT };


/*

const DEFAULT_WAYPOINT = {
  type: WAYPOINT_TYPES[0],
  destination: '',
  basePrice: 0,
  dateFrom: new Date(),
  dateTo: new Date(),
  offers: [],
  isFavorite: false,
};

export { WAYPOINT_TYPES, FILTERS_NAMES, SORTING_NAMES, DateFormats, DEFAULT_WAYPOINT }; */

/*

const Offers = [
  {
    type: 'check-in',
    offers: [
      {
        id: 1,
        title: 'Add breakfast',
        price: 50
      }
    ]
  },
  {
    type: 'sightseeing',
    offers: [
      {
        id: 10,
        title: 'Book tickets',
        price: 40
      },
      {
        id: 20,
        title: 'Lunch in city',
        price: 30
      }
    ]
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: 100,
        title: 'Brunch',
        price: 20
      },
      {
        id: 200,
        title: 'Takeaway lunch',
        price: 12
      },
      {
        id: 321,
        title: 'Cooking master class',
        price: 30
      }
    ]
  },
  {
    type: 'taxi',
    offers: [
      {
        id: 2341,
        title: 'Order Uber',
        price: 40
      }
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        id: 1541,
        title: 'airport-hotel route',
        price: 20
      },
      {
        id: 442,
        title: 'City tour',
        price: 10
      }
    ]
  },
  {
    type: 'train',
    offers: []
  },
  {
    type: 'ship',
    offers: []
  },
  {
    type: 'drive',
    offers: [
      {
        id: 71,
        title: 'Rent a car',
        price: 200
      },
      {
        id: 82,
        title: 'Car rental with driver',
        price: 1000
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: 51,
        title: 'Add luggage',
        price: 50
      },
      {
        id: 442,
        title: 'Switch to comfort',
        price: 80
      }
    ]
  }
];


export {Offers,WAYPOINT_TYPES,FILTERS_NAMES, SORTING_NAMES, DEFAULT_WAYPOINT, DateFormats,DESTINITIONS,DESCRIPTIONS};*/
