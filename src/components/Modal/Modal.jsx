import { useEffect } from 'react';

import PropTypes from 'prop-types';

import css from './Modal.module.css';

export const Modal = ({ largeImageURL, closeModal }) => {
  const pressKeyDown = evt => {
    if (evt.code === 'Escape') {
      closeModal(evt);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', pressKeyDown);
    return () => {
      window.removeEventListener('keydown', pressKeyDown);
    };
  }, []);

  // componentDidMount() {
  //   window.addEventListener('keydown', this.pressKeyDown);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.pressKeyDown);
  // }

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
