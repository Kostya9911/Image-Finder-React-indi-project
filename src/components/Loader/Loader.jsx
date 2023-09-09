import { Oval } from 'react-loader-spinner';

import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.Loader}>
      <Oval
        height={80}
        width={80}
        color="blue
        "
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="orange 
        "
        strokeWidth={8}
        strokeWidthSecondary={5}
      />
    </div>
  );
};
