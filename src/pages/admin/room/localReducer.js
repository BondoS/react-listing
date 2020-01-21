/* eslint-disable no-case-declarations */
import produce from 'immer';

export default (state, { type, payload: { value } }) => {
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
    case 'max_occupancy':
    case 'price_in_usd':
    case 'hotelId':
      return produce(state, draftState => {
        draftState[type] = value;
      });

    default:
      return state;
  }
};
