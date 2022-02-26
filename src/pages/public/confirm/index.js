import React from 'react';
import { useTranslation } from 'react-i18next';
import ls from 'local-storage';
import Header from '../../../components/header';
import Main from '../../../components/main';
import useQuery from '../../../hooks/useQuery';
import StyledConfirm from '../../../components/confirm/styled';

function ConfirmPg() {
  const query = useQuery();
  const id = query.get('id');
  const reservation = ls.get('reservation');
  const { t, i18n } = useTranslation();

  let renderResult;
  if (id && reservation) {
    if (id === reservation.id) {
      renderResult = (
        <StyledConfirm>
          <div>
            <div>{t('congrats')}</div>
            <div>{t('plzBookmark')}</div>
            <div>
              <span>{t('confirmId')}: </span>
              <span className="confirmId">{reservation.id}</span>
            </div>
            <div>
              <div>
                <span>Name: </span>
                <span>John Doe</span>
              </div>
              <div>
                <span>{t('hotel')}: </span>
                <span>{reservation.hotel.name[i18n.language]} </span>
              </div>
              <div>
                <span>{t('room')}: </span>
                <span>{reservation.room.name[i18n.language]} </span>
              </div>
              <div>
                <span>{t('occupancy')}: </span>
                <span>{reservation.room.max_occupancy}</span>
              </div>
              <div>
                <span>{t('price')}: </span>
                <span>${reservation.room.price_in_usd} </span>
              </div>
            </div>
          </div>
        </StyledConfirm>
      );
    } else {
      renderResult = (
        <div style={{ textAlign: 'center', padding: '10px' }}>
          {t('noReservationData')}
        </div>
      );
    }
  } else {
    renderResult = (
      <div style={{ textAlign: 'center', padding: '10px' }}>
        {t('noReservationData')}
      </div>
    );
  }
  return (
    <div>
      <Header />
      <Main>{renderResult}</Main>
    </div>
  );
}

ConfirmPg.propTypes = {};

export default ConfirmPg;
