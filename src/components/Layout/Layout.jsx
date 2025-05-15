import React, { Suspense } from 'react';
import AppBar from '../AppBar/AppBar.jsx';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={null}>{children}</Suspense>
      </main>
    </>
  );
};

export default Layout;
