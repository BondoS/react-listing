import PropTypes from 'prop-types';

export const initialHotel = {
  id: '',
  hotelId: '',
  name: { en: '', de: '' },
  description: { en: '', de: '' },
  distance_to_venue: '',
  rating: '',
  price_category: '',
  amenities: [],
  images: []
};

export const initialRoom = {
  id: '',
  name: { en: '', de: '' },
  description: { en: '', de: '' },
  max_occupancy: '1',
  price_in_usd: '0'
};

export const hotelPropTypes = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.shape({ en: PropTypes.string, de: PropTypes.string }),
  description: PropTypes.shape({
    en: PropTypes.string,
    de: PropTypes.string
  }),
  distance_to_venue: PropTypes.string,
  rating: PropTypes.string,
  price_category: PropTypes.string,
  amenities: PropTypes.arrayOf(PropTypes.number),
  images: PropTypes.arrayOf(PropTypes.string)
});

export const roomPropTypes = PropTypes.shape({
  id: PropTypes.string,
  hotelId: PropTypes.string,
  name: PropTypes.shape({ en: PropTypes.string, de: PropTypes.string }),
  description: PropTypes.shape({
    en: PropTypes.string,
    de: PropTypes.string
  }),
  max_occupancy: PropTypes.string,
  price_in_usd: PropTypes.string
});
