import PropTypes from 'prop-types';

import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  return (
    <header className={css.Searchbar}>
      <form onSubmit={onSubmit} className={css.SearchForm}>
        <input
          className={css.SearchForm_input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.SearchForm_button}>
          <span className={css.SearchForm_button_label}>Search</span>
        </button>
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
