import React, { useState } from 'react';
import s from './Homepage.module.css';
import clsx from 'clsx';
import Catalog from '../Catalog/Catalog.jsx';

const Homepage = () => {
  const [clicks, setClicks] = useState(false);

  const handleClick = () => {
    console.log('Button clicked');
    setClicks(true);
  };
  return (
    <section className={clsx(s.homePage, 'container')}>
      <div className={s.homeWrapper}>
        <div className={s.homeText}>
          <h1 className={s.title}>Find your perfect rental car</h1>
          <p className={s.text}>
            Reliable and budget-friendly rentals for any journey
          </p>
        </div>
        <button onClick={handleClick} className={s.button} type="button">
          View&nbsp;Catalog
        </button>
        {clicks && <Catalog />}
      </div>
    </section>
  );
};

export default Homepage;
