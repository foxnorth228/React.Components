import React from 'react';
import MainPage from './Content/Page/MainPage/MainPage';
import AboutPage from './Content/Page//AboutPage/AboutPage';
import ErrorPage from './Content/Page//ErrorPage/ErrorPage';
import FormPage from './Content/Page/FormPage/FormPage';

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
    link: '/form',
    name: 'Form',
    type: 'form',
    page: <FormPage />,
  },
  {
    link: '/404',
    name: '404',
    type: 'error',
    page: <ErrorPage />,
  },
];

export default pagesInfo;
