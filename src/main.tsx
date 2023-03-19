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

export const routes = (
  <>
    <Route path="/" element={<Content type="main" />} />
    <Route path="/about" element={<Content type="about" />} />
    <Route path="/404" element={<Content type="error" />} />
    <Route path="*" element={<Navigate to="/404" />} />
  </>
);

export const router = createBrowserRouter(createRoutesFromElements(routes));

ReactDOM.createRoot(
  (document.getElementById('root') as HTMLElement) || document.createElement('div')
).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
