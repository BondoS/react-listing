import React from 'react';
import PropTypes from 'prop-types';
import useModal from '../modal';
import StyledModal from '../ui/modal';
import Button from '../ui/button';
import {
  initialRoom,
  roomPropTypes,
  initialHotel,
  hotelPropTypes
} from '../../store/reducers/properties/types';

function ConfirmBtn({ hotel, room, lng, t, confirm }) {
  const { openModal, closeModal, isOpen, Modal } = useModal();

  return (
    <>
      <Button btnStyle="book" type="button" onClick={e => openModal(e)}>
        {t('bookNow')}
      </Button>
      {isOpen && (
        <Modal>
          <StyledModal>
            <div className="content">
              <div>
                <span>{t('hotel')}: </span>
                <span>{hotel.name[lng]}</span>
              </div>
              <div>
                <span>{t('room')}: </span>
                <span>{room.name[lng]}</span>
              </div>
              <div>
                <span>{t('price')}: </span>
                <span> ${room.price_in_usd}</span>
              </div>
            </div>

            <div className="buttonsOuter">
              <Button
                btnStyle="cancel"
                type="button"
                onClick={() => closeModal()}
              >
                {t('Cancel')}
              </Button>
              <Button btnStyle="confirm" onClick={() => confirm(room)}>
                {t('confirmBooking')}
              </Button>
            </div>
          </StyledModal>
        </Modal>
      )}
    </>
  );
}

ConfirmBtn.propTypes = {
  hotel: hotelPropTypes,
  room: roomPropTypes,
  lng: PropTypes.string,
  t: PropTypes.func,
  confirm: PropTypes.func
};

ConfirmBtn.defaultProps = {
  hotel: initialHotel,
  room: initialRoom,
  lng: 'en',
  t: () => {},
  confirm: () => {}
};

export default ConfirmBtn;
