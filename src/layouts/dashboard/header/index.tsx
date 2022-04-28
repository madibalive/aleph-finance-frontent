// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, Button, AppBar, Toolbar } from '@mui/material';
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
      <div className="logo">
        <Logo />
        <div className="veriticalBar" />
        <h4>Aleph Finance</h4>
      </div>
      <div className="portal__header--right">
        <HeaderSearch />
        <ManageAddress />
        <NotificationsPopover />
      </div>
    </header>
  );
}
