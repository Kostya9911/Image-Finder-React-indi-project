import PropTypes from 'prop-types';

import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ imageUrl, openModal, id }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        onClick={() => openModal(id)}
        src={imageUrl}
        alt=""
        className={css.ImageGalleryItem_image}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  openModal: PropTypes.func,
  imageUrl: PropTypes.string,
};
