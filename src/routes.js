import React from 'react';

import {
  Master,
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

export const routes = [
  {
    path: '/',
    element: <Master />,
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
];
