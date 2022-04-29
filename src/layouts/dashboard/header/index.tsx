// @mui
import { Box, Stack, Typography } from '@mui/material';
// hooks
import { HEADER, NAVBAR } from '../../../config';
// components
//
import ManageAddress from './ManageAddress';
import HeaderSearch from './HeaderSearch';
import NotificationsPopover from './NotificationsPopover';
import Logo from 'src/components/Logo';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function DashboardHeader({}) {
  return (
    <header className="portal__header">
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
    </header>
  );
}
