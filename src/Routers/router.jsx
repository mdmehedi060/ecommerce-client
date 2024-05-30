import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import App from '../App';
import Login from '../Pages/Login';
import ForgotPassword from '../Pages/ForgotPassword';
import Signup from '../Pages/Signup';

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
    ],
  },
]);

export default router;
