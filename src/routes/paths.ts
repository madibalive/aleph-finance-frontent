// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------

export const PATH_PAGE = {
  page404: '/404',
  page500: '/500',
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    dashboard: path(ROOTS_DASHBOARD, '/dashboard'),
    nft: path(ROOTS_DASHBOARD, '/nft'),
    settings: path(ROOTS_DASHBOARD, '/settings'),
    profile: path(ROOTS_DASHBOARD, '/profile'),
  },
};
