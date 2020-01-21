import React from 'react';
import PropTypes from 'prop-types';
import {
  initialHotel,
  hotelPropTypes,
  initialRoom,
  roomPropTypes
} from '../../store/reducers/properties/types';
import HotelStyled from '../hotelStyled';

const Hotel = ({ hotel, rooms, t, lng }) => {
  return (
    <HotelStyled hotel={hotel} rooms={rooms} t={t} lng={lng} theme="full" />
  );
};

Hotel.propTypes = {
  hotel: hotelPropTypes,
  rooms: PropTypes.arrayOf(roomPropTypes),
  t: PropTypes.func,
  lng: PropTypes.string
};

Hotel.defaultProps = {
  hotel: initialHotel,
  rooms: [initialRoom],
  t: () => {},
  lng: 'en'
};

export default Hotel;
