// @mui
import { alpha, Box, Stack, Typography } from '@mui/material';
// hooks
import { HEADER, NAVBAR } from '../../../config';
// components
//
import ManageAddress from './ManageAddress';
import HeaderSearch from './HeaderSearch';
import NotificationsPopover from './NotificationsPopover';
import Logo from 'src/components/Logo';
import useOffSetTop from 'src/hooks/useOffSetTop';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function DashboardHeader({}) {
  const isOffset = useOffSetTop(100);

  return (
    <Box
      className="portal__header"
      sx={{
        ...(isOffset && {
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
          backgroundColor: (theme) => alpha(theme.palette.background.default, 0.72),
          height: { md: 88 - 16 },
        }),
        px: { md: 4 },
      }}
    >
      <Stack className="logo" direction="row" alignItems="center" justifyContent="center">
        <Logo />
        <Box
          sx={{
            marginLeft: '5px',
            marginRight: '5px',
            width: '1px',
            height: '30px',
            background: '#d6b565',
          }}
        />
        <Typography variant="h6">Aleph Finance</Typography>
      </Stack>
      <div className="portal__header--right">
        {/* <HeaderSearch /> */}
        <ManageAddress />
        {/* <NotificationsPopover /> */}
      </div>
    </Box>
  );
}
