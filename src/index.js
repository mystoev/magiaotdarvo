import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { routes } from './routes';

const queryClient = new QueryClient();
const router = createHashRouter(routes);
const root = createRoot(document.getElementById('app'));

const theme = {
  colors: {
    main: '#F3E5CF',
    second: '#1C1311',
    third: '#C2B9B0',
    accent: '#EEC61F',
    logo: '#583023'
  }
};

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
