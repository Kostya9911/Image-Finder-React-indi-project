import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';

import css from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          openModal={openModal}
          key={nanoid()}
          id={image.id}
          imageUrl={image.webformatURL}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  openModal: PropTypes.func,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
    })
  ),
};
