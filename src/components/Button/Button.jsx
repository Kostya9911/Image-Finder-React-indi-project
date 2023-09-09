import PropTypes from 'prop-types';

import css from './Button.module.css';

export const Button = ({ loadMore, children }) => {
  return (
    <button onClick={loadMore} type="button" className={css.Button}>
      {children}
    </button>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func,
  children: PropTypes.string,
};
