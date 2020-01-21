import React, { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'uuid';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  getPropertyById,
  setPropertyById
} from '../../../store/reducers/properties';
import { initialRoom } from '../../../store/reducers/properties/types';
import Main from '../../../components/main';
import Header from '../../../components/header';
import Form from './form';
import useQuery from '../../../hooks/useQuery';
import localReducer from './localReducer';

const HotelContainer = () => {
  const query = useQuery();
  const dispatch = useDispatch();
  const history = useHistory();
  const { t, i18n } = useTranslation();
  const { hotels } = useSelector(state => state);
  const [room, localDispatch] = useReducer(localReducer, initialRoom);
  const id = query.get('id');

  const handleSubmit = e => {
    e.preventDefault();
    const action = id ? 'edit' : 'add';
    dispatch(setPropertyById('rooms', action, room)).then(() =>
      history.replace('/admin')
    );
  };

  const handleChange = ({ target: { value, name } }) => {
    localDispatch({ type: name, payload: { value } });
  };

  useEffect(() => {
    dispatch(getPropertyById('rooms', query.get('id'))).then(currRoom => {
      if (!currRoom) {
        localDispatch({
          type: 'set',
          payload: { value: { ...initialRoom, id: uuid.v4() } }
        });
      } else {
        localDispatch({
          type: 'set',
          payload: { value: { ...currRoom } }
        });
      }
    });
    // YES, I need it to execute only once, on first load
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
};

export default HotelContainer;
