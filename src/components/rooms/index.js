import React from 'react';
import PropTypes from 'prop-types';
import ls from 'local-storage';
import uuid from 'uuid';
import { useHistory } from 'react-router-dom';
import {
  initialRoom,
  roomPropTypes,
  initialHotel,
  hotelPropTypes
} from '../../store/reducers/properties/types';
import ConfirmBtn from './confirmBtn';
import Styled from './roomsStyled';

const Rooms = ({ hotel, rooms, t, lng }) => {
  const history = useHistory();

  const confirmHandler = async room => {
    const confirmationId = await uuid.v4();
    // #TODO try catch block
    await ls.set('reservation', {
      id: confirmationId,
      hotel,
      room
    });
    await history.replace(`/confirm/?id=${confirmationId}`);
  };

  return (
    <Styled>
      <div className="roomsTitle">{t('rooms')}</div>
      {Object.keys(rooms).map(key => (
        <div key={rooms[key].id} className="room">
          <div className="roomTitle">{rooms[key].name[lng]}</div>
          <div className="field">{rooms[key].description[lng]}</div>
          <div className="field">
            <span>{t('occupancy')}: </span>
            <span>{rooms[key].max_occupancy}</span>
          </div>
          <div className="field">
            <span>{t('price')}: </span>
            <span> ${rooms[key].price_in_usd}</span>
          </div>
          <ConfirmBtn
            lng={lng}
            to={`/confirm/?id=${rooms[key].id}`}
            hotel={hotel}
            room={rooms[key]}
            confirm={confirmHandler}
            t={t}
          />
        </div>
      ))}
    </Styled>
  );
};

Rooms.propTypes = {
  hotel: hotelPropTypes,
  rooms: PropTypes.arrayOf(roomPropTypes),
  t: PropTypes.func,
  lng: PropTypes.string
};

Rooms.defaultProps = {
  hotel: initialHotel,
  rooms: [initialRoom],
  t: () => {},
  lng: 'en'
};
export default Rooms;
