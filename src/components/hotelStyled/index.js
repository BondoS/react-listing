/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  initialHotel,
  hotelPropTypes,
  initialRoom,
  roomPropTypes
} from '../../store/reducers/properties/types';
import amenities from '../../utils/enums/amenities';
import prices from '../../utils/enums/price';
import Rooms from '../rooms';
import Styled from './style';
import BasicRooms from './basicRooms';

function Hotel({ hotel, rooms, theme, t, lng }) {
  return (
    <Styled key={hotel.id} className={theme}>
      <div className="mainContent">
        <div className="txt">
          <div className="name">
            {theme === 'basic' ? (
              <Link to={`/hotel/?id=${hotel.id}`}>{hotel.name[lng]}</Link>
            ) : (
              hotel.name[lng]
            )}
          </div>
          <div className="field">
            <div className="label">{t('rating')}: </div>
            <div className="value">{hotel.rating}</div>
          </div>
          <div className="field">
            <div className="label">{t('priceCategory')}: </div>
            <div className="value"> {t(prices[hotel.price_category])}</div>
          </div>
          <div className="field">
            <div className="label">{t('distance')}: </div>
            <span className="value">{hotel.distance_to_venue}</span>
          </div>
          <div className="field">
            {hotel.amenities.map(amenity => (
              <span className="amenity" key={`amenity-${amenity}`}>
                {t(amenities[amenity])}
              </span>
            ))}
          </div>
        </div>

        <div className="images">
          {hotel.images.map(image => (
            <LazyLoadImage
              key={`${hotel.id}-image-${image}`}
              alt="hotel room"
              width={theme === 'full' ? '250px' : '150px'}
              height={theme === 'full' ? '250px' : '150px'}
              style={{ objectFit: 'cover' }}
              src={`${process.env.PUBLIC_URL}/images/${image}`}
            />
          ))}
        </div>
      </div>
      <div className="hotelsRooms">
        {theme === 'full' ? (
          <Rooms hotel={hotel} rooms={rooms} lng={lng} t={t} />
        ) : (
          <BasicRooms hotel={hotel} rooms={rooms} lng={lng} t={t} />
        )}
      </div>
    </Styled>
  );
}

Hotel.propTypes = {
  hotel: hotelPropTypes,
  rooms: PropTypes.arrayOf(roomPropTypes),
  theme: PropTypes.string,
  t: PropTypes.func,
  lng: PropTypes.string
};

Hotel.defaultProps = {
  hotel: initialHotel,
  rooms: [initialRoom],
  theme: '',
  t: () => {},
  lng: 'en'
};

export default Hotel;
