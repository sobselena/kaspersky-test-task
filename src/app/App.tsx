import { RouterProvider } from 'react-router';
import { router } from './router/router';

export const App = () => (
  <>
    <RouterProvider router={router} />
  </>
);
