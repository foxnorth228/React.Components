import React from 'react';
import MainPage from './Content/Page/MainPage/MainPage';
import AboutPage from './Content/Page//AboutPage/AboutPage';
import ErrorPage from './Content/Page//ErrorPage/ErrorPage';

const pagesInfo = [
  {
    link: '/',
    name: 'Main',
    type: 'main',
    page: <MainPage />,
  },
  {
    link: '/about',
    name: 'About',
    type: 'about',
    page: <AboutPage />,
  },
  {
    link: '/404',
    name: '404',
    type: 'error',
    page: <ErrorPage />,
  },
];

export default pagesInfo;
