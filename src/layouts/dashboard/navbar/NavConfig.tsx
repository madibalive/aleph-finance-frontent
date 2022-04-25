// components
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

// const getIcon = (name: string) => (
//   <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />
// );

const getIcon = (name: string) => (
  <SvgIconStyle src={`/img/navbar/${name}.svg`} sx={{ width: '100%', height: '100%' }} />
);

const ICONS = {
  dashboard: getIcon('ic_dashboard'),
  settings: getIcon('ic_settings'),
  nft: getIcon('ic_nft'),
  profile: getIcon('ic_profile'),
};

const navConfig = [
  {
    subheader: 'Dashboard',
    items: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: ICONS.dashboard,
        children: [
          { title: 'Summary', path: '/dashboard/summary' },
          { title: 'Nodes', path: '/dashboard/nodes' },
          { title: 'Wallets', path: '/dashboard/wallets' },
        ],
      },
      { title: 'NFTs', path: '/nft', icon: ICONS.nft },
      { title: 'Profile', path: '/profile', icon: ICONS.profile },
      { title: 'Settings', path: '/settings', icon: ICONS.settings },
    ],
  },
];

export default navConfig;
