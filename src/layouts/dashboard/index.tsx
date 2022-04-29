import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// config
import { HEADER, NAVBAR } from '../../config';
//
import DashboardHeader from './header';
import Navbar from './navbar/index';
import { Footer } from './footer';

// ----------------------------------------------------------------------

const MainStyle = styled('main')(({ theme }) => ({
  flexGrow: 1,
  // paddingTop: HEADER.MOBILE_HEIGHT + 24,
  paddingBottom: HEADER.MOBILE_HEIGHT + 24,
  [theme.breakpoints.up('lg')]: {
    // paddingLeft: 16,
    // paddingRight: 16,
    paddingTop: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
    paddingBottom: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
    width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH}px)`,
    transition: theme.transitions.create('margin-left', {
      duration: theme.transitions.duration.shorter,
    }),
  },
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        display: { lg: 'flex' },
        minHeight: { lg: 1 },
      }}
    >
      <DashboardHeader />

      <Navbar
        isOpenSidebar={open}
        onOpenSidebar={() => setOpen(true)}
        onCloseSidebar={() => setOpen(false)}
      />

      <MainStyle>
        <Outlet />
        <Footer />
      </MainStyle>
    </Box>
  );
}
