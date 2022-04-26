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

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function DashboardHeader({}) {
  return (
    <header className="portal__header">
      <div className="logo">
        <a href="#">
          <img className="img-fluid" src="/img/logo.png" alt="" />
        </a>
      </div>
      <div className="portal__header--right">
        <HeaderSearch />
        <ManageAddress />
        <NotificationsPopover />
      </div>
    </header>
  );
}
