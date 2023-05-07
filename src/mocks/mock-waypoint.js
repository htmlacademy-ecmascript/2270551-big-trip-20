import { getRandomArrayElement } from '../utils';
import { DESTINITIONS, DESCRIPTIONS } from '../consts';

const DEFAULT_WAYPOINT = {
  id: '',
  basePrice: 0,
  dateFrom: '',
  dateTo: '',
  destination: '',
  isFavorite: false,
  offers: [],
  type: '',
};

const mockPoints = [
  {
    id: 1,
    basePrice: 6318,
    dateFrom: '2023-10-27T00:28:01.397Z',
    dateTo: '2023-10-28T00:28:01.397Z',
    destination: 1,
    isFavorite: true,
    offers: [],
    type: 'restaurant',
  },
  {
    id: 2,
    basePrice: 6801,
    dateFrom: '2023-10-28T00:28:01.397Z',
    dateTo: '2023-10-28T15:28:01.397Z',
    destination: 2,
    isFavorite: false,
    offers: [1],
    type: 'check-in',
  },
  {
    id: 3,
    basePrice: 7079,
    dateFrom: '2023-10-28T15:28:01.397Z',
    dateTo: '2023-10-29T20:28:01.397Z',
    destination: 3,
    isFavorite: true,
    offers: [1, 2],
    type: 'drive',
  },
  {
    id: 4,
    basePrice: 2399,
    dateFrom: '2023-10-29T20:28:01.397Z',
    dateTo: '2023-10-31T07:28:01.397Z',
    destination: 1,
    isFavorite: true,
    offers: [1, 2, 3],
    type: 'train',
  },
  {
    id: 5,
    basePrice: 9713,
    dateFrom: '2023-10-31T21:28:01.397Z',
    dateTo: '2023-11-01T08:28:01.397Z',
    destination: 2,
    isFavorite: true,
    offers: [1, 2, 3, 4],
    type: 'sightseeing',
  },
  {
    id: 6,
    basePrice: 4401,
    dateFrom: '2023-11-01T08:28:01.397Z',
    dateTo: '2023-11-02T22:28:01.397Z',
    destination: 3,
    isFavorite: false,
    offers: [],
    type: 'taxi',
  },
  {
    id: 7,
    basePrice: 3089,
    dateFrom: '2023-11-02T22:28:01.397Z',
    dateTo: '2023-11-03T04:28:01.397Z',
    destination: 1,
    isFavorite: false,
    offers: [1],
    type: 'flight',
  },
  {
    id: 8,
    basePrice: 226,
    dateFrom: '2023-11-04T06:28:01.397Z',
    dateTo: '2023-11-05T07:28:01.397Z',
    destination: 2,
    isFavorite: true,
    offers: [1, 2],
    type: 'bus',
  },
  {
    id: 9,
    basePrice: 8274,
    dateFrom: '2023-11-17T17:28:01.397Z',
    dateTo: '2023-11-19T16:28:01.397Z',
    destination: 3,
    isFavorite: true,
    offers: [1, 2, 3],
    type: 'ship',
  },
];


const mockDestinations = [
  {
    id: 1,
    description: getRandomArrayElement(DESCRIPTIONS),
    name: 'Amsterdam',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${Math.floor(Math.random() * 10)}`,
        description: getRandomArrayElement(DESCRIPTIONS),
      }
    ],
  },
  {
    id: 2,
    description: getRandomArrayElement(DESCRIPTIONS),
    name: 'Geneva',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${Math.floor(Math.random() * 10)}`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
      {
        src: `https://loremflickr.com/248/152?random=${Math.floor(Math.random() * 10)}`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
    ],
  },
  {
    id: 3,
    description: getRandomArrayElement(DESCRIPTIONS),
    name: 'Chamonix',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${Math.floor(Math.random() * 10)}`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
      {
        src: `https://loremflickr.com/248/152?random=${Math.floor(Math.random() * 10)}`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
      {
        src: `https://loremflickr.com/248/152?random=${Math.floor(Math.random() * 10)}`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
    ],
  },
];







/* const point = [ {
  'basePrice': 1100,
  'dateFrom': '2019-07-10T22:55:56.845Z',
  'dateTo': '2019-07-11T11:22:13.375Z',
  'destination': '3',
  'isFavorite': false,
  'offers': [
    '2'
  ],
  'type': 'taxi',
},
{
  'basePrice': 1300,
  'dateFrom': '2019-07-10T22:55:56.845Z',
  'dateTo': '2019-07-11T11:22:13.375Z',
  'destination': '4',
  'isFavorite': true,
  'offers': [
    '1'
  ],
  'type': 'taxi',
},
{
  'basePrice': 1200,
  'dateFrom': '2019-07-10T22:55:56.845Z',
  'dateTo': '2019-07-11T11:22:13.375Z',
  'destination': '4',
  'isFavorite': true,
  'offers': [
    '1'
  ],
  'type': 'taxi',
},
{
  'basePrice': 1800,
  'dateFrom': '2019-07-10T22:55:56.845Z',
  'dateTo': '2019-07-11T11:22:13.375Z',
  'destination': '11',
  'isFavorite': true,
  'offers': [
    '1'
  ],
  'type': 'taxi',
},
]; */

const moreOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: '1',
        title: 'Choose seats',
        price: 150
      },
      {
        id: '2',
        title: 'Add luggage',
        price: 150
      }
    ]
  },
  {
    type: 'taxi',
    offers: [
      {
        id: '5',
        title: 'Switch to comfort class',
        price: 250
      },
      {
        id: '6',
        title: 'Add luggage',
        price: 150
      }
    ]
  },
];

/* const destinations = [
  {
    id: '3',
    description:getRandomArrayElement(Descriptions),
    name: getRandomArrayElement(DESTINITIONS),
    pictures: [
      {
        srс: 'https://loremflickr.com/248/152?random=2',
        description: 'Event photo'
      },
      {
        srс: 'https://loremflickr.com/248/152?random=3',
        description: 'Event photo'
      }
    ]
  },
  {
    id: '4',
    description: getRandomArrayElement(Descriptions),
    name: getRandomArrayElement(DESTINITIONS),
    pictures: [
      {
        srс: 'https://loremflickr.com/248/152?random=1',
        description: 'Event photo'
      },
      {
        srс: 'https://loremflickr.com/248/152?random=5',
        description: 'Event photo'
      }
    ]
  },
  {
    id: '4',
    description: getRandomArrayElement(Descriptions),
    name: getRandomArrayElement(DESTINITIONS),
    pictures: [
      {
        srс: 'https://loremflickr.com/248/152?random=1',
        description: 'Event photo'
      },
      {
        srс: 'https://loremflickr.com/248/152?random=5',
        description: 'Event photo'
      }
    ]
  },
  {
    id: '11',
    description: getRandomArrayElement(Descriptions),
    name: getRandomArrayElement(DESTINITIONS),
    pictures: [
      {
        srс: 'https://loremflickr.com/248/152?random=1',
        description: 'Event photo'
      },
      {
        srс: 'https://loremflickr.com/248/152?random=5',
        description: 'Event photo'
      }
    ]
  }
]; */


function getPoint(){
  return getRandomArrayElement(mockPoints);
}

function getOffer() {
  return getRandomArrayElement(moreOffers);
}

function getDestination() {
  return mockDestinations;
}

export {DEFAULT_WAYPOINT, getPoint, getOffer, getDestination};
