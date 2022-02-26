import React, { useEffect, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  getPropertyById,
  setPropertyById,
} from '../../../store/reducers/properties';
import { initialHotel } from '../../../store/reducers/properties/types';
import Main from '../../../components/main';
import Header from '../../../components/header';
import Form from './form';
import useQuery from '../../../hooks/useQuery';
import localReducer from './localReducer';

function HotelContainer() {
  const query = useQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hotel, localDispatch] = useReducer(localReducer, initialHotel);
  const id = query.get('id');
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const action = id ? 'edit' : 'add';
    dispatch(setPropertyById('hotels', action, hotel)).then(() =>
      navigate('/admin')
    );
  };

  const handleChange = ({ target: { value, name } }) => {
    localDispatch({ type: name, payload: { value } });
  };

  useEffect(() => {
    dispatch(getPropertyById('hotels', query.get('id'))).then((currHotel) => {
      if (!currHotel) {
        localDispatch({
          type: 'set',
          payload: { value: { ...initialHotel, id: v4() } },
        });
      } else {
        localDispatch({
          type: 'set',
          payload: { value: { ...currHotel } },
        });
      }
    });
  }, []);

  return (
    <div>
      <Header />
      <Main>
        <h3>{t('hotelPage')}</h3>
        <Form
          hotel={hotel}
          change={handleChange}
          handleSubmit={handleSubmit}
          id={hotel.id}
        />
      </Main>
    </div>
  );
}

export default HotelContainer;
