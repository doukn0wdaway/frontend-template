import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-dvh min-w-dvw">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
