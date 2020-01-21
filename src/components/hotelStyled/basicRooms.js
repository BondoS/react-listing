import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'react-collapse';
import { Link } from 'react-router-dom';
import {
  initialHotel,
  hotelPropTypes,
  initialRoom,
  roomPropTypes
} from '../../store/reducers/properties/types';

const BasicRooms = ({ hotel, rooms, t, lng }) => {
  const [accordion, setAccordion] = useState({
    isOpened: false,
    height: 0
  });

  return rooms.length ? (
    <div className={`${accordion.isOpened ? 'open' : 'closed'}`}>
      <button
        className="collapseHeader"
        type="button"
        onClick={() => {
          setAccordion({
            isOpened: !accordion.isOpened,
            height: accordion.isOpened ? 0 : 'auto'
          });
        }}
      >
        <div className="label">{t('availableRooms')}</div>
      </button>
      <Collapse
        isOpened={accordion.isOpened}
        initialStyle={{
          transition: 'height 500ms',
          height: accordion.height
        }}
      >
        <div className="roomsBasic">
          {rooms.map(room => (
            <div key={room.id} className="roomOuter">
              <span className="roomName">{room.name[lng]}</span>
              <span className="roomPrice"> ${room.price_in_usd}</span>
            </div>
          ))}
        </div>
        <Link className="readMore" to={`/hotel/?id=${hotel.id}`}>
          {t('readMore')}
        </Link>
      </Collapse>
    </div>
  ) : (
    <div className="noRooms">{t('noAvailableRooms')}</div>
  );
};

BasicRooms.propTypes = {
  hotel: hotelPropTypes,
  rooms: PropTypes.arrayOf(roomPropTypes),
  t: PropTypes.func,
  lng: PropTypes.string
};

BasicRooms.defaultProps = {
  hotel: initialHotel,
  rooms: [initialRoom],
  t: () => {},
  lng: 'en'
};
export default BasicRooms;
