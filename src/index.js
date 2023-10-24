import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import {
  Root,
  Home,
  Error,
  Products,
  Product,
  Query,
  About,
  Contacts,
  CategoryPage,
  EmailSent
} from './pages';
import { ProtectedRoute, Login, Admin, EditProduct } from './pages/admin';
import AddProduct from './pages/admin/add-product';

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'query',
        element: <Query />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contacts',
        element: <Contacts />
      },
      {
        path: 'category/:id',
        element: <CategoryPage />
      },
      {
        path: 'product/:category/:productName',
        element: <Product />
      },
      {
        path: 'email-sent',
        element: <EmailSent />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/admin',
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <Admin />
      },
      {
        path: 'add/:category',
        element: <AddProduct />
      },
      {
        path: 'edit/:category/:productName',
        element: <EditProduct />
      }
    ]
  }
]);

const queryClient = new QueryClient();

const root = createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
