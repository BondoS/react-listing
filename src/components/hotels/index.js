import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  initialHotel,
  hotelPropTypes,
} from '../../store/reducers/properties/types';
import HotelStyled from '../hotelStyled';

const HotelsList = ({ hotels }) => {
  const { t, i18n } = useTranslation();

  return hotels.map((hotel) => (
    <HotelStyled
      key={hotel.id}
      hotel={hotel}
      rooms={hotel.rooms}
      t={t}
      lng={i18n.language}
      theme='basic'
    />
  ));
};

HotelsList.propTypes = {
  hotels: PropTypes.arrayOf(hotelPropTypes),
};

HotelsList.defaultProps = {
  hotels: [initialHotel],
};
export default HotelsList;
