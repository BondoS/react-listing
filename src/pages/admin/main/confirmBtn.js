import React from 'react';
import PropTypes from 'prop-types';
import useModal from '../../../components/modal';
import StyledModal from '../../../components/ui/modal';
import Button from '../../../components/ui/button';

function ConfirmBtn({ type, name, t, confirm }) {
  const { openModal, closeModal, isOpen, Modal } = useModal();

  return (
    <>
      <Button btnStyle="delete" type="button" onClick={e => openModal(e)}>
        {t('Delete')}
      </Button>
      {isOpen && (
        <Modal>
          <StyledModal>
            <div className="content">
              <div>{t('sureToDelete')}</div>
              <div>
                <span>{t(type)}: </span>
                <span>{name}</span>
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
              <Button btnStyle="confirm" onClick={() => confirm()}>
                {t('confirmDeletion')}
              </Button>
            </div>
          </StyledModal>
        </Modal>
      )}
    </>
  );
}

ConfirmBtn.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  t: PropTypes.func,
  confirm: PropTypes.func
};

ConfirmBtn.defaultProps = {
  type: '',
  name: '',
  t: () => {},
  confirm: () => {}
};

export default ConfirmBtn;
