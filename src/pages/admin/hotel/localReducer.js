/* eslint-disable no-case-declarations */
import produce from 'immer';

export default (state, { type, payload: { value } }) => {
  if (type.startsWith('images')) {
    const [field, index] = type.split('-');
    return produce(state, draftState => {
      draftState[field][index] = value;
    });
  }
  if (type.startsWith('amenity')) {
    const [, currAmenity] = type.split('-');
    const newAmenities = state.amenities.includes(+currAmenity)
      ? state.amenities.filter(amenity => amenity !== +currAmenity)
      : [...state.amenities, +currAmenity];
    return produce(state, draftState => {
      draftState.amenities = newAmenities;
    });
  }

  switch (type) {
    case 'set':
      return value;

    case 'name-en':
    case 'name-de':
    case 'description-en':
    case 'description-de':
      const [field, lng] = type.split('-');
      return produce(state, draftState => {
        draftState[field][lng] = value;
      });
    case 'distance_to_venue':
    case 'rating':
    case 'price_category':
      return produce(state, draftState => {
        draftState[type] = value;
      });

    default:
      return state;
  }
};
