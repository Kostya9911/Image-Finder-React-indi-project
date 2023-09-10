import { useEffect, useState } from 'react';

import toast, { Toaster } from 'react-hot-toast';

import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { fetchImages } from 'api';

import css from './App.module.css';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    if (evt.target.elements.query.value.trim().length <= 1) {
      toast.error('Search failed! More characters needed!');
      evt.target.reset();
      return;
    }

    setQuery(`${Date.now()}/${evt.target.elements.query.value.trim()}`);
    setImages([]);
    setPage(1);
    setLargeImageURL('');

    evt.target.reset();
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    setTimeout(() => {
      window.scrollBy({
        top: 300 * 2,
        behavior: 'smooth',
      });
    }, 700);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getImages() {
      try {
        setLoading(true);
        setError(false);

        const { hits, totalHits } = await fetchImages(
          query.split('/')[1],
          page
        );

        setImages(prevImages => [...prevImages, ...hits]);
        setLoadMore(page < Math.ceil(totalHits / 12));
      } catch (error) {
        toast.error('ERROR');
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [query, page]);

  const handleOpenModal = id => {
    setOpenModal(true);
    setLargeImageURL(images.filter(image => image.id === id)[0]);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className={css.App}>
      <Searchbar onSubmit={handleSubmit}></Searchbar>
      {loading && <Loader />}
      {error && !loading && <div>!!!ERROR!!!</div>}
      <Toaster position="top-right" reverseOrder={false} />
      {images.length > 0 && (
        <ImageGallery
          openModal={handleOpenModal}
          images={images}
        ></ImageGallery>
      )}

      {openModal && (
        <Modal
          largeImageURL={{ ...largeImageURL }}
          closeModal={handleCloseModal}
        ></Modal>
      )}
      {loadMore && <Button loadMore={handleLoadMore}>Load more</Button>}
    </div>
  );
};
