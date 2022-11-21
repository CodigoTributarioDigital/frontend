import HomePage from '../../../pages/Homepage';
import Invoices from '../../../pages/Invoices';
import MissingFiles from '../../../pages/MissingFiles';
import PGDAS from '../../../pages/PGDAS';
import Some from '../../../pages/Some';

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
  {
    path: '/pgdas',
    element: PGDAS,
  },
  {
    path: '/some',
    element: Some,
  },
] as RoutesType[];

export { allRoutes };
