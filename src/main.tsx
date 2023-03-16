import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <>
            <SearchBar />
            <div>Hello World</div>
          </>
        }
      />
      <Route path="/about" element={<div>About</div>} />
      <Route path="/404" element={<div>404</div>} />
      <Route path="*" element={<Navigate to="/404" />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
