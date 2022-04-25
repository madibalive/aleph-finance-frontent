// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, Button, AppBar, Toolbar } from '@mui/material';
// hooks
import useOffSetTop from '../../../hooks/useOffSetTop';
import useResponsive from '../../../hooks/useResponsive';
// utils
import cssStyles from '../../../utils/cssStyles';
// config
import { HEADER, NAVBAR } from '../../../config';
// components
import Logo from '../../../components/Logo';
import Iconify from '../../../components/Iconify';
//
import ManageAddress from './ManageAddress';

// ----------------------------------------------------------------------

type RootStyleProps = {
  isCollapse: boolean;
  isOffset: boolean;
  verticalLayout: boolean;
};

const RootStyle = styled(AppBar, {
  shouldForwardProp: (prop) =>
    prop !== 'isCollapse' && prop !== 'isOffset' && prop !== 'verticalLayout',
})<RootStyleProps>(({ isCollapse, isOffset, verticalLayout, theme }) => ({
  ...cssStyles(theme).bgBlur(),
  boxShadow: 'none',
  height: HEADER.MOBILE_HEIGHT,
  zIndex: theme.zIndex.appBar + 1,
  transition: theme.transitions.create(['width', 'height'], {
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('lg')]: {
    // height: HEADER.DASHBOARD_DESKTOP_HEIGHT,
    // width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH + 1}px)`,
    // ...(isCollapse && {
    //   width: `calc(100% - ${NAVBAR.DASHBOARD_COLLAPSE_WIDTH}px)`,
    // }),
    // ...(isOffset && {
    //   height: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
    // }),
    width: '100%',
    height: HEADER.DASHBOARD_DESKTOP_HEIGHT,
    backgroundColor: theme.palette.background.default,
  },
}));

// ----------------------------------------------------------------------

type Props = {
  onOpenSidebar: VoidFunction;
  verticalLayout?: boolean;
};

export default function DashboardHeader({ onOpenSidebar, verticalLayout = false }: Props) {
  const isOffset = useOffSetTop(HEADER.DASHBOARD_DESKTOP_HEIGHT) && !verticalLayout;
  const isMobile = useResponsive('down', 'sm');

  return (
    <RootStyle isCollapse={false} isOffset={isOffset} verticalLayout={verticalLayout}>
      <Toolbar
        sx={{
          minHeight: '100% !important',
          px: { lg: 5 },
        }}
      >
        <Stack
          direction={{ md: 'column', lg: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent={{ md: 'center', lg: 'space-between' }}
        >
          <Logo sx={{}} />
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
            <Box className="header__search">
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16.196"
                  height="16.196"
                  viewBox="0 0 16.196 16.196"
                >
                  <path
                    id="Path_2431"
                    data-name="Path 2431"
                    d="M16,15.068l-2.784-2.722h0l-.065-.1a.656.656,0,0,0-.921,0h0a6.57,6.57,0,0,1-8.518.276A6.219,6.219,0,0,1,2.329,4.3a6.54,6.54,0,0,1,8.161-2.4,6.269,6.269,0,0,1,3.494,7.6.631.631,0,0,0,.147.625.665.665,0,0,0,.627.188.65.65,0,0,0,.48-.437h0A7.559,7.559,0,0,0,11.189.762,7.9,7.9,0,0,0,1.368,3.308a7.5,7.5,0,0,0,1.1,9.875A7.927,7.927,0,0,0,12.62,13.6l2.465,2.41a.663.663,0,0,0,.921,0,.635.635,0,0,0,0-.907h0Z"
                    fill="#fff"
                  />
                </svg>
              </span>
              <input type="text" className="header__search--input" placeholder="Search" />
            </Box>
            <ManageAddress />
          </Stack>
          //{' '}
        </Stack>

        {/* <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          <NotificationsPopover />
        </Stack> */}
      </Toolbar>
    </RootStyle>
  );
}
