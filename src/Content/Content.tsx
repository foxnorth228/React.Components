import React from 'react';
import './Content.css';
import Header from './Header/Header';
import Page from './Page/Page';

function Content({ type }: { type: string }) {
  return (
    <>
      <Header type={type} />
      <Page type={type} />
    </>
  );
}

export default Content;
