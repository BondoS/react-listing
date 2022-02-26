const amenities = {
  1: 'free_parking',
  2: 'free_wifi',
  3: 'pets',
  4: 'restaurant',
  5: 'gym',
  6: 'pool',
  7: 'spa'
};

export default amenities;

export const getAmenityKeyByName = amenity => Object.keys(amenities).find(key => key === amenity);
