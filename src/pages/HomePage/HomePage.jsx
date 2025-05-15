import React from 'react';
import s from './Homepage.module.css';
import clsx from 'clsx';

const Homepage = () => {
  return (
    <section className={clsx(s.homepage, 'container')}>
      <input type="text" />
    </section>
  );
};

export default Homepage;
