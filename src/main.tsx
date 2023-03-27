import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import Content from './Content/Content';
import pagesInfo from './pagesInfo';
//update to hooks
export const routes = (
  <>
    {pagesInfo.map((el, i) => {
      return <Route key={i} path={el.link} element={<Content type={el.type} />} />;
    })}
    <Route path="*" element={<Navigate to={pagesInfo[pagesInfo.length - 1].link} />} />
  </>
);

const router = createBrowserRouter(createRoutesFromElements(routes));

ReactDOM.createRoot(
  (document.getElementById('root') as HTMLElement) || document.createElement('div')
).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
