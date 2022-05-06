import { useEffect, useState } from 'react';
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

type Props = {};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const onCloseSidebar = () => setOpen(false);
  const onOpenSidebar = () => setOpen(true);

  const theme = useTheme();

  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (open) {
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
    <Box
      className="main__menu--bar"
      sx={{
        m: { lg: 4 },
      }}
    >
      <a href="javascript:void(0)" className="menu-toggle">
        <span className="line a"></span>
        <span className="line b"></span>
        <span className="line c"></span>
      </a>
      <div className="sidebar__menu">{renderContent}</div>
    </Box>
  );
}
