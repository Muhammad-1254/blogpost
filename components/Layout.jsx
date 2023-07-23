import React from 'react';
import { Header } from './';
import { Suspense } from 'react'

const Layout = ({ children }) => {
  return (
    <>
    <Suspense fallback={<p>Loading...</p>}>
      <Header />
      {children}
      </Suspense>

    </>
  );
};

export default Layout;
