const WAYPOINT_TYPES = [
  'Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'
];

const DESTINITIONS = [
  'Amsterdam', 'Krasnodar', 'Rostov-on-Done', 'New York', 'Moscow', 'Saint Petersburg', 'Samara', 'Soсhi', 'Madrid'
];

const DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
];

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


export {Offers,WAYPOINT_TYPES,DESTINITIONS,DESCRIPTIONS};
