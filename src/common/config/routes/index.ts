import HomePage from '../../../pages/Homepage';
import Invoices from '../../../pages/Invoices';
import MissingFiles from '../../../pages/MissingFiles';

export type RoutesType = {
  path: string;
  element: () => JSX.Element;
  isPrivate?: boolean;
};

const allRoutes = [
  {
    path: '/',
    element: HomePage,
  },
  {
    path: '/invoices',
    element: Invoices,
  },
  {
    path: '/missing-files',
    element: MissingFiles,
  },
] as RoutesType[];

export { allRoutes };
