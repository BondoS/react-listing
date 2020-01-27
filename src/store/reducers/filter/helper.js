import qs from 'qs';
import { perPage } from '../../../utils/envVarMap';
import distanceEnum from '../../../utils/enums/distance';
import ratingEnum from '../../../utils/enums/rating';
import sortEnum from '../../../utils/sort';

export default (hotels, query) => {
  const { filter, page = 1, sort = 1 } = qs.parse(query);
  console.log(
    'hotels',
    hotels,
    'qs.parse(query)',
    qs.parse(query),
    'filter',
    filter,
    'page',
    page,
    'sort',
    sort
  );
  const validatePrice = (hotel, filterPrice) => {
    return +filterPrice ? +hotel.price_category === +filterPrice : true;
  };

  const validateDistance = (hotel, filterDistance) => {
    return +filterDistance
      ? distanceEnum[filterDistance].validate(hotel.distance_to_venue)
      : true;
  };

  const validateRating = (hotel, filterPrice) => {
    return +filterPrice ? ratingEnum[filterPrice].validate(hotel.rating) : true;
  };

  const validateAmenities = (hotel, filterAmenities) => {
    return filterAmenities.length > 0
      ? filterAmenities.every(amenity => hotel.amenities.includes(+amenity))
      : true;
  };
  const allHotels = filter
    ? hotels.ids.filter(hotelId => {
        const hotel = hotels.list[hotelId];
        console.log(
          'hotel',
          hotel,
          'price',
          validatePrice(hotel, filter.price),
          'distance',
          validateDistance(hotel, filter.distance),
          'rate',
          validateRating(hotel, filter.rating),
          'amenities',
          validateAmenities(hotel, filter.amenities || [])
        );
        return (
          validatePrice(hotel, filter.price) &&
          validateDistance(hotel, filter.distance) &&
          validateRating(hotel, filter.rating) &&
          validateAmenities(hotel, filter.amenities || [])
        );
      })
    : hotels.ids;

  const sortedHotels = [...allHotels].sort(sortEnum[sort].sorting(hotels.list));

  const pageCount = Math.ceil(sortedHotels.length / perPage);
  const endIndex = page * perPage;
  const startIndex = endIndex - perPage;
  console.log(
    'filter result',
    sortedHotels.slice(startIndex, endIndex),
    'page count',
    pageCount
  );
  return { hotels: sortedHotels.slice(startIndex, endIndex), pageCount };
};
