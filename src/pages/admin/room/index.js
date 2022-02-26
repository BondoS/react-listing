import React, { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  getPropertyById,
  setPropertyById,
} from '../../../store/reducers/properties';
import { initialRoom } from '../../../store/reducers/properties/types';
import Main from '../../../components/main';
import Header from '../../../components/header';
import Form from './form';
import useQuery from '../../../hooks/useQuery';
import localReducer from './localReducer';

function HotelContainer() {
  const query = useQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { hotels } = useSelector((state) => state);
  const [room, localDispatch] = useReducer(localReducer, initialRoom);
  const id = query.get('id');

  const handleSubmit = (e) => {
    e.preventDefault();
    const action = id ? 'edit' : 'add';
    dispatch(setPropertyById('rooms', action, room)).then(() =>
      navigate('/admin')
    );
  };

  const handleChange = ({ target: { value, name } }) => {
    localDispatch({ type: name, payload: { value } });
  };

  useEffect(() => {
    dispatch(getPropertyById('rooms', query.get('id'))).then((currRoom) => {
      if (!currRoom) {
        localDispatch({
          type: 'set',
          payload: { value: { ...initialRoom, id: v4() } },
        });
      } else {
        localDispatch({
          type: 'set',
          payload: { value: { ...currRoom } },
        });
      }
    });
  }, []);

  return (
    <div>
      <Header />
      <Main>
        <h3>{t('roomPage')}</h3>
        <Form
          room={room}
          hotels={hotels}
          change={handleChange}
          handleSubmit={handleSubmit}
          id={room.id}
          lng={i18n.language}
        />
      </Main>
    </div>
  );
}

export default HotelContainer;
