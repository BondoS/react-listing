import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import useQuery from '../../../hooks/useQuery';
import { getPropertyById } from '../../../store/reducers/properties';
import { initialHotel } from '../../../store/reducers/properties/types';
import Hotel from '../../../components/hotel';
import Header from '../../../components/header';
import Main from '../../../components/main';

function HotelPg() {
  const query = useQuery();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const hotelId = query.get('id');
  const [hotel, setHotel] = useState(initialHotel);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { rooms } = useSelector(state => state);

  // No need for extra api call, I have just loaded hotels and rooms into redux store.
  // Why I've loaded them all? because I'm handling filtering and sorting locally.
  // Using graphQl in the future will handle this use case with just one API call.
  const hotelRooms = rooms.ids
    .filter(roomId => rooms.list[roomId].hotelId === hotelId)
    .map(roomId => rooms.list[roomId]);

  useEffect(() => {
    dispatch(getPropertyById('hotels', hotelId)).then(currHotel => {
      if (!currHotel) {
        setError(true);
        setLoading(false);
      } else {
        setHotel(currHotel);
        setLoading(false);
      }
    });
  }, [dispatch, hotelId]);

  let renderResult;
  if (loading) {
    renderResult = (
      <div style={{ textAlign: 'center', padding: '10px' }}>{t('loading')}</div>
    );
  } else if (error) {
    renderResult = (
      <div style={{ textAlign: 'center', padding: '10px' }}>
        {t('sorryNoResult')}
      </div>
    );
  } else {
    renderResult = (
      <Hotel hotel={hotel} lng={i18n.language} t={t} rooms={hotelRooms} />
    );
  }
  return (
    <div>
      <Header />
      <Main>{renderResult} </Main>
    </div>
  );
}

export default HotelPg;
