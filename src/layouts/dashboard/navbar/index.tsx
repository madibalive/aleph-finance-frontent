import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Stack, Drawer, IconButton } from '@mui/material';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// utils
import cssStyles from '../../../utils/cssStyles';
// config
import { HEADER, NAVBAR } from '../../../config';
// components
import Logo from '../../../components/Logo';
import Scrollbar from '../../../components/Scrollbar';
import Iconify from '../../../components/Iconify';

//
import navConfig from './NavConfig';
import NavbarAccount from './NavbarAccount';
import NavSection from './section';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.shorter,
    }),
  },
}));

// ----------------------------------------------------------------------

type Props = {
  isOpenSidebar: boolean;
  onCloseSidebar: VoidFunction;
  onOpenSidebar: VoidFunction;
};

export default function Navbar({ isOpenSidebar, onOpenSidebar, onCloseSidebar }: Props) {
  const theme = useTheme();

  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
  }, [pathname]);

  const renderContent = (
    <>
      <Scrollbar
        sx={{
          height: 1,
          '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
        }}
      >
        <Stack
          spacing={3}
          sx={{
            // pt: 3,
            pb: 2,
            // px: 2.5,
            flexShrink: 0,
            alignItems: 'center',
          }}
        >
          <NavbarAccount />
        </Stack>

        <NavSection navConfig={navConfig} />

        <Box sx={{ flexGrow: 1 }} />
      </Scrollbar>
    </>
  );

  return (
    <>
      {!isDesktop && (
        <Box
          onClick={isOpenSidebar ? onCloseSidebar : onOpenSidebar}
          sx={{
            position: 'absolute',
            width: 45,
            height: 45,
            top: ' 8px',
            paddingTop: ' 4px',
            border: '1px solid #E0A820',
            backgroundImage:
              'linear-gradient( 95deg,rgb(46,35,9,1) 0%,rgb(201,159,77,1) 50%,rgb(112,80,22,1) 100%)',
            left: 0,
            zIndex: theme.zIndex.drawer + 100,
            ...(isOpenSidebar && {
              left: NAVBAR.DASHBOARD_WIDTH - 45,
            }),
            transition: theme.transitions.create('left', {
              duration: theme.transitions.duration.shorter,
            }),
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: ' 65%',
              height: ' 3px',
              background: ' #fff',
              margin: ' 7px auto',
              display: ' block',
              transition: ' all ease 0.3s',
              ...(isOpenSidebar && {
                left: NAVBAR.DASHBOARD_WIDTH,
              }),
              ...(isOpenSidebar && {
                position: 'absolute',
                margin: 'auto',
                top: '0',
                right: '0',
                bottom: '0',
                left: '0',
                transformOrigin: 'center center',
              }),
              ...(isOpenSidebar && {
                transform: 'rotate(45deg)',
              }),
            }}
          />
          <Box
            sx={{
              position: 'relative',
              width: ' 65%',
              height: ' 3px',
              background: ' #fff',
              margin: ' 7px auto',
              display: ' block',
              transition: ' all ease 0.3s',
              ...(isOpenSidebar && {
                position: 'absolute',
                margin: 'auto',
                top: '0',
                right: '0',
                bottom: '0',
                left: '0',
                transformOrigin: 'center center',
              }),
              ...(isOpenSidebar && {
                opacity: 0,
              }),
            }}
          />
          <Box
            sx={{
              position: 'relative',
              width: ' 65%',
              height: ' 3px',
              background: ' #fff',
              margin: ' 7px auto',
              display: ' block',
              transition: ' all ease 0.3s',
              ...(isOpenSidebar && {
                position: 'absolute',
                margin: 'auto',
                top: '0',
                right: '0',
                bottom: '0',
                left: '0',
                transformOrigin: 'center center',
              }),
              ...(isOpenSidebar && {
                transform: 'rotate(-45deg)',
              }),
            }}
          />
        </Box>
      )}

      <RootStyle
        sx={{
          width: {
            // lg: smml ? NAVBAR.DASHBOARD_small_WIDTH : NAVBAR.DASHBOARD_WIDTH,
            lg: NAVBAR.DASHBOARD_WIDTH,
          },
        }}
      >
        {!isDesktop && (
          <Drawer
            open={isOpenSidebar}
            onClose={onCloseSidebar}
            PaperProps={{ sx: { width: NAVBAR.DASHBOARD_WIDTH, bgcolor: 'background.default' } }}
          >
            {renderContent}
          </Drawer>
        )}

        {isDesktop && (
          <Drawer
            open
            variant="persistent"
            // onMouseEnter={onHoverEnter}
            // onMouseLeave={onHoverLeave}
            PaperProps={{
              sx: {
                width: NAVBAR.DASHBOARD_WIDTH,
                borderRightStyle: 'none',
                height: `calc(100% - ${HEADER.DASHBOARD_DESKTOP_HEIGHT})`,
                overflowX: 'hidden',
                top: HEADER.DASHBOARD_DESKTOP_HEIGHT,
                bgcolor: 'background.default',
                transition: (theme) =>
                  theme.transitions.create('width', {
                    duration: theme.transitions.duration.standard,
                  }),
              },
            }}
          >
            {renderContent}
          </Drawer>
        )}
      </RootStyle>
    </>
  );
}
