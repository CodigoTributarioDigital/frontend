import HomePage from '../../../pages/Homepage';

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
] as RoutesType[];

export { allRoutes };
