import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import App from '../App';
import Login from '../Pages/Login';
import ForgotPassword from '../Pages/ForgotPassword';
import Signup from '../Pages/Signup';
import AdminPanel from '../Pages/AdminPanel';
import AllUsers from '../Pages/AllUsers';
import AllProducts from '../Pages/AllProducts';
import CategoryProduct from '../Pages/CategoryProduct';
import ProductDetails from '../Pages/ProductDetails';
import Cart from '../Pages/Cart';
import SearchProduct from '../Pages/SearchProduct';
import Success from '../Pages/Success';
import Cancel from '../Pages/Cancel';
import OrderPage from '../Pages/OrderPage';
import AllOrder from '../Pages/AllOrder';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <Signup></Signup>,
      },
      {
        path: '/forgot-password',
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: 'product-category',
        element: <CategoryProduct />,
      },
      {
        path: 'product/:id',
        element: <ProductDetails />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'success',
        element: <Success />,
      },
      {
        path: 'cancel',
        element: <Cancel />,
      },
      {
        path: 'search',
        element: <SearchProduct />,
      },
      {
        path: 'order',
        element: <OrderPage />,
      },
      {
        path: '/admin-panel',
        element: <AdminPanel />,
        children: [
          {
            path: '/admin-panel/all-users',
            element: <AllUsers></AllUsers>,
          },
          {
            path: '/admin-panel/all-products',
            element: <AllProducts></AllProducts>,
          },
          {
            path: '/admin-panel/all-orders',
            element: <AllOrder />,
          },
        ],
      },
    ],
  },
]);

export default router;
