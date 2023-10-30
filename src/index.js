import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { routes } from './routes';
import { theme } from './theme';

const queryClient = new QueryClient();
const router = createHashRouter(routes);
const root = createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
