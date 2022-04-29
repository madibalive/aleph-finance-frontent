import { Suspense, lazy, ElementType } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard" replace />, index: true },
        { path: '/', element: <Navigate to="/dashboard" replace />, index: true },
        { path: '/nft', element: <PageNft /> },
        { path: '/settings', element: <PageSettings /> },
        { path: '/profile', element: <PageProfile /> },

        {
          path: '/dashboard',
          children: [
            { element: <Navigate to="/dashboard/summary" replace />, index: true },
            { path: '/dashboard/summary', element: <PageDashboard /> },
            { path: '/dashboard/nodes', element: <PageNodes /> },
            { path: '/dashboard/wallets', element: <PageWallets /> },
          ],
        },
      ],
    },
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

// Dashboard
const PageDashboard = Loadable(lazy(() => import('../pages/PageDashboard')));
const PageNodes = Loadable(lazy(() => import('../pages/PageNodes')));
const PageWallets = Loadable(lazy(() => import('../pages/PageWallets')));
const PageNft = Loadable(lazy(() => import('../pages/PageNft')));
const PageProfile = Loadable(lazy(() => import('../pages/PageProfile')));
const PageSettings = Loadable(lazy(() => import('../pages/PageSettings')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
