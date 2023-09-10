import { useEffect } from 'react';

import PropTypes from 'prop-types';

import css from './Modal.module.css';

export const Modal = ({ largeImageURL, closeModal }) => {
  useEffect(() => {
    const pressKeyDown = evt => {
      if (evt.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', pressKeyDown);
    return () => {
      window.removeEventListener('keydown', pressKeyDown);
    };
  }, [closeModal]);

  return (
    <div onClick={closeModal} className={css.Overlay}>
      <div className={css.Modal}>
        <img src={largeImageURL.largeImageURL} className={css.img} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func,
  largeImageURL: PropTypes.object,
};
