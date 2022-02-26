import usePortal from 'react-useportal';

const Modal = () => {
  const { isOpen, openPortal, togglePortal, closePortal, Portal } = usePortal({
    onOpen({ portal }) {
      portal.current.style.cssText = `
        position: fixed;
        left: 50%;
        top: 50%;
        height: 100vh;
        width: 100vw;
        transform:  translateX(-50%) translateY(calc(-50% - .5px));
        z-index: 1000;
        background: rgba(0, 0, 0, 0.5);
      `;
    },
    onClose({ portal }) {
      portal.current.style.cssText = `
        height: initial;
        width: initial;
        transform: translate(-50%,-50%);
        background: transparent;
      `;
    },
  });

  return {
    Modal: Portal,
    toggleModal: togglePortal,
    closeModal: closePortal,
    openModal: openPortal,
    isOpen,
  };
};

export default Modal;
