import React from 'react';
import './Page.css';
import pagesInfo from '../../pagesInfo';

function Page({ type }: { type: string }) {
  const pageObj = Object.entries(pagesInfo).find((el) => el[1].type === type);
  const page = (pageObj && pageObj[1] && pageObj[1].page) || <></>;
  return <div className="page">{page}</div>;
}

export default Page;
