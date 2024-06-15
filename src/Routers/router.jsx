import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import App from '../App';
import Login from '../Pages/Login';
import ForgotPassword from '../Pages/ForgotPassword';
import Signup from '../Pages/Signup';
import AdminPanel from '../Pages/AdminPanel';
import AllUsers from '../Pages/AllUsers';
import AllProducts from '../Pages/AllProducts';

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
        ],
      },
    ],
  },
]);

export default router;
