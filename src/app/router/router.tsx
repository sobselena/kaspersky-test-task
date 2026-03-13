import { createBrowserRouter, Navigate } from 'react-router';
import { Paths } from '../../constants/paths';
import { AppLayout } from '../layouts/app-layout';
import { UsersPage } from '../../pages/users';
import { GroupsPage } from '../../pages/groups';
import { AboutUsPage } from '../../pages/about';
import { ErrorPage } from '../../pages/error';
import { NotFoundPage } from '../../pages/not-found';

export const router = createBrowserRouter([
  {
    path: Paths.ROOT,
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to={Paths.ABOUT_US} replace />,
      },
      {
        path: Paths.ABOUT_US,
        element: <AboutUsPage />,
      },
      {
        path: Paths.USERS,
        element: <UsersPage />,
      },
      {
        path: Paths.GROUPS,
        element: <GroupsPage />,
      },
    ],
  },
  {
    path: Paths.NOT_FOUND,
    element: <NotFoundPage />,
  },
  {
    path: Paths.OTHER_PATHS,
    element: <Navigate to={Paths.NOT_FOUND} replace />,
  },
]);
